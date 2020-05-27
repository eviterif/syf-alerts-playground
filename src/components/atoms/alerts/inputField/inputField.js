import React from "react"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import { string, func, bool} from 'prop-types';

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

export default function InputField({iconName, inputType, inputValue, changeHandler, inputPlaceHolder, hasErrors, hasIcon, errorMessage}){
    return (
        <InputFieldWrapper>
            {
                iconName !== '' &&
                <FontAwesomeIcon 
                    className="dollarSignIcon" 
                    icon={faSolid[iconName]}/>
            }
            <Input 
                type={inputType}
                value={inputValue}
                onChange={changeHandler}
                placeholder={inputPlaceHolder} 
                hasErrors={hasErrors } 
                hasIcon={hasIcon} />
            {errorMessage !== '' && <ErrorMessage><FontAwesomeIcon icon={faSolid["faExclamationCircle"]}/> {errorMessage}</ErrorMessage>}
            
        </InputFieldWrapper> 
    )
}

InputField.propTypes = {
    iconName: string, 
    inputType: string, 
    inputValue: string, 
    changeHandler: func, 
    inputPlaceHolder: string, 
    hasErrors: bool, 
    hasIcon:bool, 
    errorMessage: string
}