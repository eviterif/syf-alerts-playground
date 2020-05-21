import React, {useCallback, useState} from "react";
import {number, func, object} from 'prop-types';
import styled from "styled-components";

import AlertsHeader from '../../atoms/alerts/header/AlertsHeader';
import AlertsBody from '../../atoms/alerts/body/AlertsBody';

const AccordionWrapper = styled.div`
    width: 98%;
    margin: 0 auto 30px auto;
    border-radius: 5px;
    border: 1px solid lightgray;
    overflow: hidden;
    background-color: white;
`;

export default function AlertItem({
    item,
    alertIndex, 
    itemIndex,  
    communicationMethodClick,
    buttonClickHandler,
    inputChangeHandler 
}){
    const [showPanel, setShowPanel ] = useState(false)

    const expandAccordion = useCallback( () => {
        setShowPanel(!showPanel);
    },[showPanel, setShowPanel] )

    return (
        <AccordionWrapper >
            <AlertsHeader 
                isExpanded={showPanel}
                title={item.header.title}
                input={item.body.leftSection.input}
                icons={item.icons}
                alertIndex={alertIndex}
                itemIndex={itemIndex}
                expandAccordionHandler={expandAccordion}

                isNotificationON={item.header.isOn ? true : false}
                communicationMethodClick={communicationMethodClick}
            />
            <AlertsBody 
                item={item}
                isExpanded={showPanel}
                alertIndex={alertIndex}
                itemIndex={itemIndex}
                expandAccordionHandler={expandAccordion}

                buttonClickHandler={buttonClickHandler}
                inputChangeHandler={inputChangeHandler}
                communicationMethodClick={communicationMethodClick}
                
            />
        </AccordionWrapper>
    )
}

// AccordionItem.propTypes = {
//     item: object,
//     alertIndex: number, 
//     itemIndex: number,
//     clickHandler: func, 
//     communicationMethodClick: func,
//     buttonClickHandler: func,
//     inputChangeHandler: func 
// }