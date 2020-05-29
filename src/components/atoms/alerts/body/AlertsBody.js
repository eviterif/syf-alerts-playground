import React, {useState, useCallback} from "react";
import {connect} from 'react-redux';
import {turnNotificationOn, turnNotificationOff, saveNotification } from "../../../../store/actions/alerts";

import { number, object, bool} from 'prop-types';
import {AccordionBodyWrapper} from './AlertsBodyStyles';


import AlertsBodyLeft from './AlertsBodyLeft';
import AlertsBodyRight from './AlertsBodyRight';

const AlertsBody = ({ item, isExpanded, alertIndex, itemIndex, onTurnNotificationOn, onTurnNotificationOff, onSaveNotification }) => {

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
    
    const turnNotificationOn = useCallback(async () => {
        setLoading(true);
        try {
            await onTurnNotificationOn( alertIndex, itemIndex, inputValue, communicationMethods);
            setInputValueHasChanged(false);
            setCommunicationMethodsHasChanged(false);
        } catch (err) {
            console.log(err)
        }
        setLoading(false);
    }, [onTurnNotificationOn, setLoading, alertIndex, itemIndex, inputValue, communicationMethods]);

    const turnNotificationOff = useCallback(async () => {
        let reset_communication_methods = communicationMethods.map( (obj) => ({ 
            ...obj,
            isOn: false
        }));
        setLoading(true);
        try {
            await onTurnNotificationOff( alertIndex, itemIndex, "", reset_communication_methods);
            setInputValue("");
            setInputValueHasChanged(false);
            setCommunicationMethods(reset_communication_methods);
            setCommunicationMethodsHasChanged(false);
        } catch (err) {
            console.log(err)
        }
        setLoading(false);
    }, [onTurnNotificationOff, setLoading, alertIndex, itemIndex, communicationMethods]);

    const saveNotification = useCallback(async () => {
        setLoading(true);
        try {
            await onSaveNotification( alertIndex, itemIndex, inputValue, communicationMethods);
            setInputValueHasChanged(false);
            setCommunicationMethodsHasChanged(false);
        } catch (err) {
            console.log(err)
        }
        setLoading(false);
    }, [onSaveNotification, setLoading, alertIndex, itemIndex, inputValue, communicationMethods]);

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
        <AccordionBodyWrapper isExpanded={isExpanded} >
            <div className="accordionBodyInnerWrapper">
                <AlertsBodyLeft 
                    item={item} 
                    inputValue= {inputValue}
                    onInputChange={onInputChangeHandler}
                    inputError={inputError} />

                <AlertsBodyRight 
                     item={item} 
                     communicationMethods={communicationMethods}
                     communicationMethodClick={onCommunicationMethodClickHandler}
                     communicationError={communicationError}
                     onButtonClick={handleButtonClick}
                     loading={loading}
                     buttonLabelClicked={buttonLabelClicked}
                     inputValueHasChanged={inputValueHasChanged}
                     communicationMethodsHasChanged={communicationMethodsHasChanged}/>      
            </div>
        </AccordionBodyWrapper>
    )
}

AlertsBody.propTypes = {
    item: object, 
    isExpanded: bool, 
    alertIndex: number, 
    itemIndex: number
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

export default connect(mapStateToProps, mapDispatchToProps)(AlertsBody);
