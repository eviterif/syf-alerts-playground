import React, {useReducer, useCallback} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import initialState from "./Alerts.Data";

import AlertItem from '../../molecules/alerts/AlertsItem';
import {PageWrapper, SectionTitle } from './AlertsListStyles';

const accordionReducer = (state, action) => {
    switch (action.type){
        case "SHOW_PANEL":
            let tmp_state = {...state}; 
            tmp_state.alerts[action.alertIndex].items[action.itemIndex].body.isVisible = true;
            return tmp_state;
        case "HIDE_PANEL":
            let tmp_state_hide_panel = {...state}; 
            tmp_state_hide_panel.alerts[action.alertIndex].items[action.itemIndex].body.isVisible = false;
            return tmp_state_hide_panel;
        case "UPDATE_INPUT": 
            let temporary_state = {...state}; 
            temporary_state.alerts[action.alertIndex].items[action.itemIndex].body.leftSection.input.inputValue = action.value;
            return temporary_state;
        case "TURN_ON":
            let tmp_state_turn_on = {...state}; 
            tmp_state_turn_on.alerts[action.alertIndex].items[action.itemIndex].header.isOn = true;
            return tmp_state_turn_on;
        case "TURN_OFF":
            let tmp_state_turn_off = {...state}; 
            tmp_state_turn_off.alerts[action.alertIndex].items[action.itemIndex].header.isOn = false;
            tmp_state_turn_off.alerts[action.alertIndex].items[action.itemIndex].icons.map( (obj) => {
                if(obj.isOn){
                    obj.isOn = false;
                }
                return obj;
            })
            return tmp_state_turn_off;
        case "SET_ERROR_MESSAGE":
            let tmp_state_error_message = {...state}; 
            tmp_state_error_message.alerts[action.alertIndex].items[action.itemIndex].body.leftSection.input.inputError = action.errorMessage;
            return tmp_state_error_message;
        case "SET_COMMUNICATION_METHOD":
            let tmp_communication_method_state = {...state}; 
            tmp_communication_method_state.alerts[action.alertIndex].items[action.itemIndex].icons[action.iconIndex].isOn = true;
            return  tmp_communication_method_state
        case "UNSET_COMMUNICATION_METHOD":
            let tmp_communication_unset_method_state = {...state}; 
            tmp_communication_unset_method_state.alerts[action.alertIndex].items[action.itemIndex].icons[action.iconIndex].isOn = false;
            return tmp_communication_unset_method_state
        default: 
            return state;
    }
}


export default function AlertsList(){
    const [currentState, dispatch ] = useReducer(accordionReducer, initialState);
    const {alerts} = currentState;

    // const expandAccordion = useCallback((alertIndex, itemIndex) => {
    //     if(alerts[alertIndex].items[itemIndex].body.isVisible){
    //         dispatch({type: "HIDE_PANEL", alertIndex: alertIndex, itemIndex: itemIndex });
    //     }else{
    //         dispatch({type: "SHOW_PANEL", alertIndex: alertIndex, itemIndex: itemIndex });
    //     }
    // }, [dispatch, alerts]);

    const expandAccordion = useCallback( () => {}, [] )

    const handleButtonClick = useCallback((alertIndex, itemIndex, label) =>{
        let tmp_label = label.toLowerCase();
        let communication_methods = alerts[alertIndex].items[itemIndex].icons.filter( (obj) => obj.isOn === true);

        if(tmp_label === "close"){
            expandAccordion(alertIndex, itemIndex);
        }
        
        if(tmp_label === "turn on" && alerts[alertIndex].items[itemIndex].body.leftSection.input){
            let tmp_value = alerts[alertIndex].items[itemIndex].body.leftSection.input.inputValue;

            if(tmp_value === ""){
                dispatch({ type: "SET_ERROR_MESSAGE", alertIndex, itemIndex, errorMessage: "This field is required"});
            }else{
                dispatch({ type: "SET_ERROR_MESSAGE", alertIndex, itemIndex, errorMessage: ""});
            }

            if(communication_methods.length <= 0){
                alert("Please Select a communication method");
            }

            if(tmp_value !== "" && communication_methods.length > 0){
                dispatch({type: "TURN_ON", alertIndex, itemIndex});
            }
        }

        if(tmp_label === "turn on" && !alerts[alertIndex].items[itemIndex].body.leftSection.input){
            if(communication_methods.length <= 0){
                alert("Please Select a communication method");
            }else{
                dispatch({ type: "TURN_ON", alertIndex, itemIndex });
            } 
        }

        if(tmp_label === "turn off"){
            dispatch({type: "TURN_OFF", alertIndex, itemIndex})
            if(alerts[alertIndex].items[itemIndex].body.leftSection.input){
                dispatch({
                    type: "UPDATE_INPUT", alertIndex, itemIndex, value: "" });
            }
        }

    },[dispatch, expandAccordion, alerts]);

    const handleInputOnChange = useCallback((alertIndex, itemIndex, value) => {
        dispatch({ type: "UPDATE_INPUT", alertIndex, itemIndex, value });

        if(value !== ''){
            dispatch({ type: "SET_ERROR_MESSAGE", alertIndex, itemIndex, errorMessage: "" });
        }
    }, [dispatch]);

    const handleCommunicationMethodClick = useCallback( (alertIndex, itemIndex, iconIndex) => {
        if(alerts[alertIndex].items[itemIndex].icons[iconIndex].isOn){
            dispatch({ type: "UNSET_COMMUNICATION_METHOD", alertIndex, itemIndex, iconIndex})
        }else{
            dispatch({ type: "SET_COMMUNICATION_METHOD", alertIndex, itemIndex, iconIndex})
        }
    },[dispatch, alerts]);

    return (
        <PageWrapper>
            {alerts.map((obj, alertIndex)=>{
                return (
                    <div key={alertIndex} className="SectionWrapper">
                        <SectionTitle>
                            <FontAwesomeIcon icon={faSolid[obj.sectionIconName]} color="#307ab0" /> {obj.sectionTitle} 
                        </SectionTitle>
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
