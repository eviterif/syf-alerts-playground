import styled from "styled-components";

export const AccordionBodyWrapper = styled.div` 
    overflow: hidden;
    max-height: ${({isExpanded}) => isExpanded ? "400px" : "0"};
    transition: max-height 0.2s ease-out;

    .accordionBodyInnerWrapper{
        padding: 15px 15px;
        display: flex;
        justify-content: space-between;
    }
    .accordionBody-subtitle{
        font-size: 12px;
        margin-bottom: 10px;
    }
    .accordionBody-amount-wrapper{
        position: relative;
        .dollarSignIcon{
            position: absolute;
            top: 31px;
            left: 11px;
            font-size: 20px;
            color: #d7d7d7;
        }
        .errorMessage{
            font-size: 12px;
            color: red;
            font-style: italic;
        }
    }
    .accordionBody-right-icon-wrapper{
        display: flex;
    }
    .accordionBody-right-bottom{
        margin: 50px 0 15px 0;
    }
    .accordionBody-tagline{
        font-size: 12px;
        font-style: italic;
    }
    @media screen and (max-width: 767px){
        .accordionBodyInnerWrapper{
            flex-direction: column
        }
        .accordionBody-right{
            width: 100%;
            margin-top: 20px;
        }
        .accordionBody-subtitle{
            text-align: center;
        }
        .accordionBody-amount-wrapper{
            text-align: center;
        }
        .accordionBody-right-icon-wrapper{
            display: flex;
            justify-content: center;
        }
        .accordionBody-right-bottom{
            text-align: center;
        }
    }
`;

export const Input = styled.input`
    padding: ${ ({hasIcon}) => hasIcon ? "10px 10px 10px 30px" : "10px" };
    border-radius: 5px;
    border-style: solid;
    width: 82%;
    border: ${ ({hasErrors}) => hasErrors ? "1px solid red" : "1px solid black"} ;
    @media screen and (max-width: 500px){
        width: 100%;
    }
`;

export const AccordionBodyRightIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    .accordionBody-right-icon-item-title{
        font-size: 12px;
        display: block;
        text-align: center;
    }
    .accordionBody-right-icon-item-icon{
        background-color: #f2f2f2;
        color: #aaaaaa;
        border-radius: 28px;
        width: 45px;
        height: 45px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    &:last-child{
        margin-right: 0;
    }
`;

export const Button = styled.button`
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