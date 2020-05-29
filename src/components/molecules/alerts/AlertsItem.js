import React, {useCallback, useState} from "react";
import {connect} from 'react-redux';
import {turnNotificationOn, turnNotificationOff, saveNotification } from "../../../store/actions/alerts";
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
export const AlertItem = ({ item, alertIndex, itemIndex, onTurnNotificationOn, onTurnNotificationOff, onSaveNotification }) => {
    const [showPanel, setShowPanel ] = useState(false);

    const currentInputValue = item.body.leftSection.input ? item.body.leftSection.input.inputValue : "";
    const [inputValue, setInputValue] = useState(item.body.leftSection.input ? item.body.leftSection.input.inputValue : "");
    const [inputError, setInputError] = useState("");
    const [inputValueHasChanged, setInputValueHasChanged] = useState(false);

    const currentCommunicationMethods =  item.icons;
    const [communicationMethods, setCommunicationMethods] = useState(currentCommunicationMethods.map(obj => ({...obj}) ));
    const [communicationError, setCommunicationError] = useState("");
    const [communicationMethodsHasChanged, setCommunicationMethodsHasChanged] = useState(false);

    const [buttonLabelClicked, setButtonLabelClicked] = useState("");
    const [loading, setLoading] = useState(false);

    //This function will expand/collapse the accordion
    const expandAccordion = useCallback( () => {
        setShowPanel(!showPanel);
        //Discaring values when collapsing the accordion
            setCommunicationMethods(currentCommunicationMethods.map( (obj) => ({...obj}) ))
            setInputValue(currentInputValue);
    },[showPanel, currentCommunicationMethods, currentInputValue] );

    //This function will turn the notifcation ON.
    const turnNotificationOn = useCallback(async () => {
        setLoading(true);
        try {
            await onTurnNotificationOn( alertIndex, itemIndex, inputValue, communicationMethods);
            setInputValueHasChanged(false);
            setCommunicationMethodsHasChanged(false);
            expandAccordion();
        } catch (err) {
            console.log(err)
        }
        setLoading(false);
    }, [onTurnNotificationOn, alertIndex, itemIndex, inputValue, communicationMethods, expandAccordion]);

    //This function will turn the notifcation OFF. 
    const turnNotificationOff = useCallback(async () => {
        let reset_communication_methods = communicationMethods.map( (obj) => ({ 
            ...obj,
            isOn: false
        }));
        setLoading(true);
        try {
            await onTurnNotificationOff( alertIndex, itemIndex, "", reset_communication_methods);
            //Reseting values
                setInputValue("");
                setInputValueHasChanged(false);
                setCommunicationMethods(reset_communication_methods);
                setCommunicationMethodsHasChanged(false);
                expandAccordion();
        } catch (err) {
            console.log(err)
        }
        setLoading(false);
    }, [onTurnNotificationOff, alertIndex, itemIndex, communicationMethods, expandAccordion]);

    //This function will update notifcation values
    const saveNotification = useCallback(async () => {
        setLoading(true);
        try {
            await onSaveNotification( alertIndex, itemIndex, inputValue, communicationMethods);
            //Reseting values
                setInputValueHasChanged(false);
                setCommunicationMethodsHasChanged(false);
        } catch (err) {
            console.log(err)
        }
        setLoading(false);
    }, [onSaveNotification, alertIndex, itemIndex, inputValue, communicationMethods]);

    //This function will be executed on the input field change
    const onInputChangeHandler = (e) => {
        setInputValue(e.currentTarget.value);
        if(inputError !== '' && e.currentTarget.value !== ''){
            setInputError("");
        }
        if(e.currentTarget.value !== currentInputValue){
            setInputValueHasChanged(true);
        }else{
            setInputValueHasChanged(false);
        }
    }

    //This function will be executed everytime the user clicks on the communications icons
    const onCommunicationMethodClickHandler = (iconIndex) => {
        if(communicationError !== ""){
            setCommunicationError("");
        }

        setCommunicationMethods(communicationMethods.map( (obj, index ) => {
            if(iconIndex === index){
                obj.isOn = obj.isOn ? false : true;
            }
            return obj;
        }));

        if(JSON.stringify(currentCommunicationMethods) !== JSON.stringify(communicationMethods)){
            setCommunicationMethodsHasChanged(true);
        }else{
            setCommunicationMethodsHasChanged(false);
        }
    }

    //This function will be executed when the user clicks one of the buttons: SAVE, TURN ON, TURN OFF
    const handleButtonClick = (label) =>{
        setButtonLabelClicked(label);

        let tmp_label = label.toLowerCase();
        let communication_methods = communicationMethods.filter( (obj) => obj.isOn === true);
        let is_form_valid = true;

        if(tmp_label === "turn on" && item.body.leftSection.input){
            if(inputValue === ""){
                setInputError("Please enter a valid amount.");
                is_form_valid = false;
            }
            if(communication_methods.length <= 0){
               setCommunicationError("Please select delivery method.");
               is_form_valid = false;
            }
            if(is_form_valid){
                turnNotificationOn();
            }
        }

        if(tmp_label === "turn on" && !item.body.leftSection.input){
            if(communication_methods.length <= 0){
                setCommunicationError("Please select delivery method.");
            }else{
                turnNotificationOn();
            } 
        }

        if(tmp_label === "turn off"){
            turnNotificationOff();
        }

        if(tmp_label === "save"){
            saveNotification();
        }
    }

    return (
        <AccordionWrapper >
            <AlertsHeader 
                isExpanded={showPanel}
                title={item.header.title}
                input={item.body.leftSection.input}
                icons={communicationMethods}
                expandAccordionHandler={expandAccordion}
                isNotificationON={item.header.isOn ? true : false}
            />
            <AlertsBody 
                item={item}
                isExpanded={showPanel}
                expandAccordionHandler={expandAccordion}
                inputValue={inputValue}
                onInputChangeHandler={onInputChangeHandler}
                inputError={inputError}
                inputValueHasChanged={inputValueHasChanged}
                communicationMethods={communicationMethods}
                onCommunicationMethodClickHandler={onCommunicationMethodClickHandler}
                communicationError={communicationError}
                communicationMethodsHasChanged={communicationMethodsHasChanged}
                handleButtonClick={handleButtonClick}
                loading={loading}
                buttonLabelClicked={buttonLabelClicked}
            />
        </AccordionWrapper>
    )
}

AlertItem.propTypes = {
    item: object,
    alertIndex: number, 
    itemIndex: number,
    onTurnNotificationOn: func,
    onTurnNotificationOff: func,
    onSaveNotification: func,
}

const mapStateToProps = state => {
    return {}
} 

const mapDispatchToProps = dispatch => {
    return {
        onTurnNotificationOn: (alertIndex, itemIndex, inputValue, communicationMethods) => dispatch(turnNotificationOn(alertIndex, itemIndex, inputValue, communicationMethods)),
        onTurnNotificationOff: (alertIndex, itemIndex, inputValue, communicationMethods) => dispatch(turnNotificationOff(alertIndex, itemIndex, inputValue, communicationMethods)),
        onSaveNotification: (alertIndex, itemIndex, inputValue, communicationMethods) => dispatch(saveNotification(alertIndex, itemIndex, inputValue, communicationMethods)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertItem);
