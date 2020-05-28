import React, {useCallback, useState} from "react";
import {connect} from 'react-redux';
import {
    updateInputValue,
    setErrorMessage,
    setCommunicationMethod,
    setCommunicationError,
    unSetCommunicationMethod,
    unSetCommunicationError,
    turnNotificationOn,
    turnNotificationOff
} from "../../../store/actions/alerts";

import {number, func, object} from 'prop-types';
import styled from "styled-components";

import AlertsHeader from '../../atoms/alerts/header/AlertsHeader';
import AlertsBody from '../../atoms/alerts/body/AlertsBody';

const AccordionWrapper = styled.div`
    width: 98%;
    margin: 0 auto 30px auto;
    border-radius: 5px;
    border: 1px solid lightgray;
    overflow: hidden;
    background-color: white;
`;
export const AlertItem = ({
    item,
    alertIndex, 
    itemIndex,  
    onUpdateInputValue, 
    onSetErrorMessage, 
    onSetCommunicationMethod, 
    onSetCommunicationError,
    onUnSetCommunicationMethod, 
    onUnSetCommunicationError,
    onTurnNotificationOn, 
    onTurnNotificationOff

}) => {
    const [showPanel, setShowPanel ] = useState(false);
    const [currentState, setCurrentState] = useState(item);

    const expandAccordion = useCallback( () => {
        setShowPanel(!showPanel);
    },[showPanel, setShowPanel] )

    const handleCommunicationMethodClick = (alertIndex, itemIndex, iconIndex) => {
        onUnSetCommunicationError(alertIndex, itemIndex);
        if(item.icons[iconIndex].isOn){
            onUnSetCommunicationMethod(alertIndex, itemIndex, iconIndex);
        }else{
            onSetCommunicationMethod(alertIndex, itemIndex, iconIndex);
        }
    }

    const handleButtonClick = (alertIndex, itemIndex, label) =>{
        let tmp_label = label.toLowerCase();
        let communication_methods = item.icons.filter( (obj) => obj.isOn === true);
        
        if(tmp_label === "turn on" && item.body.leftSection.input){
            let tmp_value = item.body.leftSection.input.inputValue;

            if(tmp_value === ""){
                onSetErrorMessage(alertIndex, itemIndex, "Please enter a valid amount.");
            }else{
                onSetErrorMessage(alertIndex, itemIndex, "");
            }

            if(communication_methods.length <= 0){
               // alert("Please Select a communication method");
               onSetCommunicationError(alertIndex, itemIndex, "Please select delivery method.");
            }else{
                onUnSetCommunicationError(alertIndex, itemIndex);
            }

            if(tmp_value !== "" && communication_methods.length > 0){
                onTurnNotificationOn(alertIndex, itemIndex)
            }
        }

        if(tmp_label === "turn on" && !item.body.leftSection.input){
            if(communication_methods.length <= 0){
                //alert("Please Select a communication method");
                onSetCommunicationError(alertIndex, itemIndex, "Please select delivery method.");
            }else{
                onTurnNotificationOn(alertIndex, itemIndex);
                onUnSetCommunicationError(alertIndex, itemIndex);
            } 
        }

        if(tmp_label === "turn off"){
            onTurnNotificationOff(alertIndex, itemIndex)

            if(item.body.leftSection.input){
                onUpdateInputValue(alertIndex, itemIndex, "");
            }

            for(let i=0; i <= item.icons.length -1; i++ ){
                onUnSetCommunicationMethod(alertIndex, itemIndex, i);
            }
        }
    }

    return (
        <AccordionWrapper >
            <AlertsHeader 
                isExpanded={showPanel}
                title={item.header.title}
                input={item.body.leftSection.input}
                icons={item.icons}
                alertIndex={alertIndex}
                itemIndex={itemIndex}
                expandAccordionHandler={expandAccordion}
                isNotificationON={item.header.isOn ? true : false}
            />
            <AlertsBody 
                item={item}
                isExpanded={showPanel}
                currentState={currentState}
                alertIndex={alertIndex}
                itemIndex={itemIndex}
                expandAccordionHandler={expandAccordion}
                buttonClickHandler={handleButtonClick}
                communicationMethodClick={handleCommunicationMethodClick}
                
            />
        </AccordionWrapper>
    )
}

const mapStateToProps = state => {
    return {
       
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onUpdateInputValue: (alertIndex, itemIndex, value) => dispatch(updateInputValue(alertIndex, itemIndex, value)),
        onSetErrorMessage: (alertIndex, itemIndex, errorMessage) => dispatch(setErrorMessage(alertIndex, itemIndex, errorMessage)),
        onSetCommunicationMethod: (alertIndex, itemIndex, iconIndex) => dispatch(setCommunicationMethod(alertIndex, itemIndex, iconIndex)),
        onSetCommunicationError: (alertIndex, itemIndex, errorMessage) => dispatch(setCommunicationError(alertIndex, itemIndex, errorMessage)),
        onUnSetCommunicationMethod: (alertIndex, itemIndex, iconIndex) => dispatch(unSetCommunicationMethod(alertIndex, itemIndex, iconIndex)),
        onUnSetCommunicationError: (alertIndex, itemIndex) => dispatch(unSetCommunicationError(alertIndex, itemIndex)),
        onTurnNotificationOn: (alertIndex, itemIndex) => dispatch(turnNotificationOn(alertIndex, itemIndex)),
        onTurnNotificationOff: (alertIndex, itemIndex) => dispatch(turnNotificationOff(alertIndex, itemIndex)),
        
    }
}


AlertItem.propTypes = {
    item: object,
    alertIndex: number, 
    itemIndex: number,
    communicationMethodClick: func
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertItem);
