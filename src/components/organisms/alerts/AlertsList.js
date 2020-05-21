import React, { useCallback, useEffect } from "react";
import {func, array} from 'prop-types';
import {connect} from 'react-redux';
import {
    getAlertsData, 
    updateInputValue,
    setErrorMessage,
    setCommunicationMethod,
    unSetCommunicationMethod,
    turnNotificationOn,
    turnNotificationOff
} from "../../../store/actions/alerts";

import SectionTitle from '../../atoms/alerts/sectionTitle/SectionTitle'
import AlertItem from '../../molecules/alerts/AlertsItem';
import {PageWrapper} from './AlertsListStyles';

const AlertsList = ({
    alerts, 
    onGetAlertsData, 
    onUpdateInputValue, 
    onSetErrorMessage, 
    onSetCommunicationMethod, 
    onUnSetCommunicationMethod, 
    onTurnNotificationOn, 
    onTurnNotificationOff
}) =>{
   
    const loadAlertsData = useCallback(async () => {
        try {
            await onGetAlertsData();
        } catch (err) {
            console.log(err)
        }
    }, [onGetAlertsData]);

    useEffect(() => {
        loadAlertsData()
    }, [loadAlertsData]);

    const expandAccordion = useCallback( () => {}, [] )

    const handleButtonClick = (alertIndex, itemIndex, label) =>{
        let tmp_label = label.toLowerCase();
        let communication_methods = alerts[alertIndex].items[itemIndex].icons.filter( (obj) => obj.isOn === true);

        if(tmp_label === "close"){
            expandAccordion(alertIndex, itemIndex);
        }
        
        if(tmp_label === "turn on" && alerts[alertIndex].items[itemIndex].body.leftSection.input){
            let tmp_value = alerts[alertIndex].items[itemIndex].body.leftSection.input.inputValue;

            if(tmp_value === ""){
                onSetErrorMessage(alertIndex, itemIndex, "This field is required");
            }else{
                onSetErrorMessage(alertIndex, itemIndex, "");
            }

            if(communication_methods.length <= 0){
                alert("Please Select a communication method");
            }

            if(tmp_value !== "" && communication_methods.length > 0){
                onTurnNotificationOn(alertIndex, itemIndex)
            }
        }

        if(tmp_label === "turn on" && !alerts[alertIndex].items[itemIndex].body.leftSection.input){
            if(communication_methods.length <= 0){
                alert("Please Select a communication method");
            }else{
                onTurnNotificationOn(alertIndex, itemIndex)
            } 
        }

        if(tmp_label === "turn off"){
            onTurnNotificationOff(alertIndex, itemIndex)

            if(alerts[alertIndex].items[itemIndex].body.leftSection.input){
                onUpdateInputValue(alertIndex, itemIndex, "");
            }
        }
    }

    const handleInputOnChange = useCallback((alertIndex, itemIndex, value) => {
        onUpdateInputValue(alertIndex, itemIndex, value);
        if(value !== ''){
            onSetErrorMessage(alertIndex, itemIndex, "");
        }
    }, [onUpdateInputValue, onSetErrorMessage]);

    const handleCommunicationMethodClick = (alertIndex, itemIndex, iconIndex) => {
        if(alerts[alertIndex].items[itemIndex].icons[iconIndex].isOn){
            onUnSetCommunicationMethod(alertIndex, itemIndex, iconIndex);
        }else{
            onSetCommunicationMethod(alertIndex, itemIndex, iconIndex);
        }
    }

    if(alerts.length <= 0 ){
        return <p>Loading...</p>
    }

    return (
        <PageWrapper>
            {alerts.map((obj, alertIndex)=>{
                return (
                    <div key={alertIndex} className="SectionWrapper">
                        <SectionTitle title={obj.sectionTitle} iconName={obj.sectionIconName} />
                        {obj.items.map( (item, itemIndex) => {
                            return (
                                <AlertItem 
                                    key={itemIndex}
                                    item={item}
                                    alertIndex={alertIndex}
                                    itemIndex={itemIndex}
                                    clickHandler={expandAccordion}
                                    communicationMethodClick={handleCommunicationMethodClick}
                                    buttonClickHandler={handleButtonClick}
                                    inputChangeHandler={handleInputOnChange}  
                                />
                            )
                        })}
                    </div>
                );
            })}
        </PageWrapper>
    )
}

const mapStateToProps = state => {
    return {
        alerts: state.alertsData.alerts
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onGetAlertsData: () => dispatch(getAlertsData()),
        onUpdateInputValue: (alertIndex, itemIndex, value) => dispatch(updateInputValue(alertIndex, itemIndex, value)),
        onSetErrorMessage: (alertIndex, itemIndex, errorMessage) => dispatch(setErrorMessage(alertIndex, itemIndex, errorMessage)),
        onSetCommunicationMethod: (alertIndex, itemIndex, iconIndex) => dispatch(setCommunicationMethod(alertIndex, itemIndex, iconIndex)),
        onUnSetCommunicationMethod: (alertIndex, itemIndex, iconIndex) => dispatch(unSetCommunicationMethod(alertIndex, itemIndex, iconIndex)),
        onTurnNotificationOn: (alertIndex, itemIndex) => dispatch(turnNotificationOn(alertIndex, itemIndex)),
        onTurnNotificationOff: (alertIndex, itemIndex) => dispatch(turnNotificationOff(alertIndex, itemIndex)),
    }
}

AlertsList.propTypes = {
    alerts: array , 
    onGetAlertsData: func, 
    onUpdateInputValue: func, 
    onSetErrorMessage: func, 
    onSetCommunicationMethod: func, 
    onUnSetCommunicationMethod: func, 
    onTurnNotificationOn: func, 
    onTurnNotificationOff: func
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertsList);
