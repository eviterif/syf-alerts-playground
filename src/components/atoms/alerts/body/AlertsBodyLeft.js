import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import { updateInputValue, setErrorMessage } from "../../../../store/actions/alerts";

import InputField from '../inputField/inputField';
import SelectField from '../selectField/SelectField';

const AlertsBodyLeft = ({alertIndex, itemIndex, item, onUpdateInputValue, onSetErrorMessage}) => {

    const handleInputOnChange = useCallback((alertIndex, itemIndex, value) => {
        onUpdateInputValue(alertIndex, itemIndex, value);
        if(value !== ''){
            onSetErrorMessage(alertIndex, itemIndex, "");
        }
    }, [onUpdateInputValue, onSetErrorMessage]);

    return(
        <div className="accordionBody-left">
            <div className="accordionBody-subtitle">{item.body.leftSection.subtitle}</div>
            <div className="accordionBody-amount-wrapper">
                <div>{item.body.leftSection.title}</div>
                { 
                    item.body.leftSection.input && item.body.leftSection.input.inputType === 'number' &&
                        <InputField 
                            iconName={item.body.leftSection.input.inputIcon}
                            inputType={item.body.leftSection.input.inputType} 
                            inputValue={item.body.leftSection.input.inputValue}
                            inputPlaceHolder={item.body.leftSection.input.inputPlaceholder} 
                            hasErrors={ item.body.leftSection.input.inputError !== '' ? true : false } 
                            hasIcon={item.body.leftSection.input.inputIcon !== '' ? true : false }
                            errorMessage={item.body.leftSection.input.inputError}
                            changeHandler={(e) => { handleInputOnChange(alertIndex, itemIndex, e.currentTarget.value) }}
                        />
                }
                {
                    item.body.leftSection.input && item.body.leftSection.input.inputType === 'select' &&
                        <SelectField 
                            inputValue={item.body.leftSection.input.inputValue}
                            hasErrors={ item.body.leftSection.input.inputError !== '' ? true : false } 
                            errorMessage={item.body.leftSection.input.inputError}
                            changeHandler={(e) => { handleInputOnChange(alertIndex, itemIndex, e.currentTarget.value) }}
                        />
                }
                { 
                    item.body.leftSection.tag &&
                    <div className="accordionBody-tagline">{item.body.leftSection.tag}</div>
                }
                
            </div>
        </div> 
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AlertsBodyLeft);

// changeHandler={(e) => { inputChangeHandler(alertIndex, itemIndex, e.currentTarget.value) }}