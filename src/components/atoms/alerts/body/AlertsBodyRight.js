import React from 'react';
import {connect} from 'react-redux';
import { 
    updateInputValue, setErrorMessage, setCommunicationMethod, setCommunicationError, 
    unSetCommunicationMethod, unSetCommunicationError, turnNotificationOn, turnNotificationOff 
} from "../../../../store/actions/alerts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import { number, object, func} from 'prop-types';

import {AccordionBodyRightIconWrapper, IconWrapper, ErrorMessage } from './AlertsBodyStyles';

import AlertButton from '../button/AlertButton';
import Loading from '../loading/Loading';

const AlertsBodyRight = ({
    alertIndex, 
    itemIndex, 
    item, 
    onSetErrorMessage,
    onSetCommunicationError,
    onTurnNotificationOn,
    onTurnNotificationOff,
    onUpdateInputValue,
    onSetCommunicationMethod, 
    onUnSetCommunicationMethod, 
    onUnSetCommunicationError
}) => {

    const handleCommunicationMethodClick = (iconIndex) => {
        onUnSetCommunicationError(alertIndex, itemIndex);
        if(item.icons[iconIndex].isOn){
            onUnSetCommunicationMethod(alertIndex, itemIndex, iconIndex);
        }else{
            onSetCommunicationMethod(alertIndex, itemIndex, iconIndex);
        }
    }

    const handleButtonClick = (label) =>{
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
        <div className="accordionBody-right">
            <div className="accordionBody-right-top">
                <div className="accordionBody-subtitle">{item.body.rightSection.subtitle}</div>
                    <div className="accordionBody-right-icon-wrapper">
                        {
                            item.icons.map( (icon, iconIndex) => (
                                <AccordionBodyRightIconWrapper  
                                    key={iconIndex} 
                                    onClick={ () => handleCommunicationMethodClick(iconIndex) } 
                                    isSelected={icon.isOn ? true : false} >
                                        <span className="accordionBody-right-icon-item-title">{icon.label}</span>
                                        <IconWrapper isSelected={icon.isOn ? true : false} hasErrors={item.iconError !== '' ? true : false}>
                                            <FontAwesomeIcon 
                                                className="fontAwesomeIcon" 
                                                icon={faSolid[icon.name]} 
                                                color={icon.isOn ? "white" : "#d7d7d7"} /> 
                                        </IconWrapper>
                                </AccordionBodyRightIconWrapper>
                            ))
                        }
                        
                    </div>
                    { item.iconError !== '' && <ErrorMessage> <FontAwesomeIcon icon={faSolid["faExclamationCircle"]}/> {item.iconError}</ErrorMessage> }
            </div>
            <div className="accordionBody-right-bottom">
                {   item.header.isOn  && 
                    <>
                        <AlertButton type="secondary" isLoading={item.isLoading}
                            onClickHandler={() => {
                                handleButtonClick("TURN OFF");
                                //expandAccordionHandler();
                            }}  
                        > 
                            TURN OFF {item.isLoading &&  <Loading display="inline" type="secondary" />}
                        </AlertButton> 
                        
                        <AlertButton type="primary" onClickHandler={() => { handleButtonClick("SAVE"); }} > 
                            SAVE 
                        </AlertButton> 
                    </>
                }
                {
                    !item.header.isOn &&
                        <AlertButton type="primary" isLoading={item.isLoading} onClickHandler={() => { handleButtonClick("TURN ON") }} >  
                                TURN ON {item.isLoading &&  <Loading display="inline" type="primary" />}
                        </AlertButton>
                }
                
            </div>
        </div> 
    )

}

const mapStateToProps = state => {
    return {}
} 

const mapDispatchToProps = dispatch => {

    return {
        onSetErrorMessage: (alertIndex, itemIndex, errorMessage) => dispatch(setErrorMessage(alertIndex, itemIndex, errorMessage)),
        onSetCommunicationError: (alertIndex, itemIndex, errorMessage) => dispatch(setCommunicationError(alertIndex, itemIndex, errorMessage)),
        onTurnNotificationOn: (alertIndex, itemIndex) => dispatch(turnNotificationOn(alertIndex, itemIndex)),
        onTurnNotificationOff: (alertIndex, itemIndex) => dispatch(turnNotificationOff(alertIndex, itemIndex)),
        onUpdateInputValue: (alertIndex, itemIndex, value) => dispatch(updateInputValue(alertIndex, itemIndex, value)),
        onSetCommunicationMethod: (alertIndex, itemIndex, iconIndex) => dispatch(setCommunicationMethod(alertIndex, itemIndex, iconIndex)),
        onUnSetCommunicationMethod: (alertIndex, itemIndex, iconIndex) => dispatch(unSetCommunicationMethod(alertIndex, itemIndex, iconIndex)),
        onUnSetCommunicationError: (alertIndex, itemIndex) => dispatch(unSetCommunicationError(alertIndex, itemIndex)) 
        
    }
}

AlertsBodyRight.propTypes = {
    alertIndex: number, 
    itemIndex: number,
    item: object, 
    onSetErrorMessage: func,
    onSetCommunicationError: func,
    onTurnNotificationOn: func,
    onTurnNotificationOff: func,
    onUpdateInputValue: func,
    onSetCommunicationMethod: func, 
    onUnSetCommunicationMethod: func, 
    onUnSetCommunicationError: func
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertsBodyRight);