import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';

const SelectElement = styled.select`
    width: 140px;
    height: 38px;
    border: ${ ({hasErrors}) => hasErrors ? "1px solid red" : "1px solid black"} ;
`;

const ErrorMessage = styled.div`
    font-size: 12px;
    color: red;
    margin-top: 5px;
`

export default function SelectField({inputValue, changeHandler, errorMessage, hasErrors}){
    const selectOptions = () => {
        let options = [];
        for(let i=1; i<15; i++){
            options.push(
                <option key={i} value={i}>
                    {i} days
                </option>
            );
        }
        return options;
    }

    return(
        <div>
            <SelectElement value={inputValue} onChange={changeHandler} hasErrors={hasErrors } >
                <option value="">Select</option>
                {selectOptions()}
            </SelectElement>
            {errorMessage !== '' && <ErrorMessage><FontAwesomeIcon icon={faSolid["faExclamationCircle"]}/> {errorMessage}</ErrorMessage>}
        </div>
    )
}