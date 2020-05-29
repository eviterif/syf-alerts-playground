import styled from "styled-components";

export const AccordionWrapper = styled.div`
    width: 98%;
    margin: 0 auto 30px auto;
    border-radius: 5px;
    border: 1px solid lightgray;
    overflow: hidden;
    background-color: white;
`;

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
    .accordionBody-right{
        min-width: 256px;
        margin-top: 20px;
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

export const IconWrapper = styled.div`
    background-color: ${({isSelected}) => isSelected ? "#307ab0" : "#f2f2f2"};
    color: #aaaaaa;
    border-radius: 28px;
    width: 45px;
    height: 45px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: ${({hasErrors}) => hasErrors ? "1px solid red" : "none" };
`;

export const ErrorMessage = styled.div`
    font-size: 12px;
    color: red;
    margin-top: 5px;
`;
