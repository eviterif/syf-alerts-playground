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
