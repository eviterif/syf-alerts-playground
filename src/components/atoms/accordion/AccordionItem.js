import React from "react";
import {number, func, object} from 'prop-types';
import styled from "styled-components";

import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

const AccordionWrapper = styled.div`
    width: 98%;
    margin: 0 auto 30px auto;
    border-radius: 5px;
    border: 1px solid lightgray;
    overflow: hidden;
    background-color: white;
`;

export default function AccordionItem({
    item,
    alertIndex, 
    itemIndex, 
    clickHandler, 
    communicationMethodClick,
    buttonClickHandler,
    inputChangeHandler 
}){
    return (
        <AccordionWrapper >
            <AccordionHeader 
                isVisible={item.body.isVisible}
                isNotificationON={item.header.isOn ? true : false}
                title={item.header.title}
                input={item.body.leftSection.input}
                icons={item.icons}
                alertIndex={alertIndex}
                itemIndex={itemIndex}
                clickHandler={clickHandler}
                communicationMethodClick={communicationMethodClick}
            />
            <AccordionBody 
                item={item}
                alertIndex={alertIndex}
                itemIndex={itemIndex}
                buttonClickHandler={buttonClickHandler}
                inputChangeHandler={inputChangeHandler}
                communicationMethodClick={communicationMethodClick}
            />
        </AccordionWrapper>
    )
}

AccordionItem.propTypes = {
    item: object,
    alertIndex: number, 
    itemIndex: number,
    clickHandler: func, 
    communicationMethodClick: func,
    buttonClickHandler: func,
    inputChangeHandler: func 
}