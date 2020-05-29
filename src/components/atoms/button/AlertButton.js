import React from 'react';
import { func, string, node, bool} from 'prop-types';
import styled from "styled-components";


const ButtonWrapper = styled.button`
    background-color: ${({buttonType, disabled}) => {
        if(disabled){
            return "#bbbbbb";
        }
       return  buttonType === "primary" ? "#33657f" : "inherit"
    } };
    font-size: 20px;
    color: ${({buttonType, disabled}) => {
        if(disabled){
            return "white";
        }
        return buttonType === "primary" ? "white" : "#33657f"
    } } ;
    width: 128px;
    padding: 15px 5px;
    border-radius: 5px;
    border: ${({buttonType}) => buttonType !== "primary" && "none" } ;
    cursor: pointer;
    position: relative;

    @media screen and (max-width: 767px){
        font-size: 16px;
    }
    &:first-child{
        margin-right: 5px;
    }
`;

export default function AlertButton({children, type, onClickHandler, isLoading}){
    return(
        <ButtonWrapper buttonType={type} onClick={ onClickHandler } disabled={isLoading}>
            {children}
        </ButtonWrapper>
    )
} 

AlertButton.propTypes = {
    children: node.isRequired,
    type: string, 
    onClickHandler: func,
    isLoading: bool
}