import React from 'react';
import { func, string, node} from 'prop-types';
import styled from "styled-components";


const ButtonWrapper = styled.button`
    background-color: ${({buttonType}) => buttonType === "primary" ? "#33657f" : "inherit" };
    font-size: 20px;
    color: ${({buttonType}) => buttonType === "primary" ? "white" : "#33657f" } ;
    width: 128px;
    padding: 10px 5px;
    border-radius: 5px;
    border: ${({buttonType}) => buttonType !== "primary" && "none" } ;
    cursor: pointer;

    @media screen and (max-width: 767px){
        font-size: 16px;
    }
`;

export default function AlertButton({children, type, onClickHandler}){
    return(
        <ButtonWrapper buttonType={type} onClick={ onClickHandler } >
            {children}
        </ButtonWrapper>
    )
} 

AlertButton.propTypes = {
    children: node.isRequired,
    type: string, 
    onClickHandler: func
}