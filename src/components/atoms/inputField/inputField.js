import React from "react"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import { object, func, string, number, oneOfType} from 'prop-types';

const InputFieldWrapper = styled.div`
    position: relative;
    .dollarSignIcon{
        position: absolute;
        top: 8px;
        left: 11px;
        font-size: 20px;
        color: #d7d7d7;
    }
`;

const Input = styled.input`
    padding: ${ ({hasIcon}) => hasIcon ? "10px 10px 10px 30px" : "10px" };
    border-radius: 5px;
    border-style: solid;
    width: 82%;
    border: ${ ({hasErrors}) => hasErrors ? "1px solid red" : "1px solid black"} ;
    @media screen and (max-width: 500px){
        width: 100%;
    }
`;

const ErrorMessage = styled.div`
    font-size: 12px;
    color: red;
    margin-top: 5px;
`

const InputField = ({ details, inputValue, inputError, onInputChange}) => {

    return (
        <InputFieldWrapper>
            {
                details.inputIcon !== '' &&
                <FontAwesomeIcon 
                    className="dollarSignIcon" 
                    icon={faSolid[details.inputIcon]}/>
            }
            <Input 
                type={details.inputType}
                value={inputValue}
                onChange={onInputChange}
                placeholder={details.inputPlaceholder} 
                hasErrors={inputError !== '' ? true : false} 
                hasIcon={details.inputIcon !== '' ? true : false} />
            {inputError !== '' && <ErrorMessage><FontAwesomeIcon icon={faSolid["faExclamationCircle"]}/> {inputError}</ErrorMessage>}
            
        </InputFieldWrapper> 
    )
}

InputField.propTypes = {
    details: object,
    inputValue: oneOfType([number, string]),
    inputError: string,
    onInputChange: func,
}

export default InputField;