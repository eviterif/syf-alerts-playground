import React, {useCallback, useState} from "react";
import {connect} from 'react-redux';
import {
    updateInputValue,
    setErrorMessage,
    setCommunicationMethod,
    setCommunicationError,
    unSetCommunicationMethod,
    unSetCommunicationError,
    turnNotificationOn,
    turnNotificationOff
} from "../../../store/actions/alerts";

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
export const AlertItem = ({ item, alertIndex, itemIndex }) => {
    const [showPanel, setShowPanel ] = useState(false);

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
            />
            <AlertsBody 
                item={item}
                isExpanded={showPanel}
                alertIndex={alertIndex}
                itemIndex={itemIndex}
                expandAccordionHandler={expandAccordion}
            />
        </AccordionWrapper>
    )
}

const mapStateToProps = state => {
    return {}
} 

const mapDispatchToProps = dispatch => {
    return {
        onUpdateInputValue: (alertIndex, itemIndex, value) => dispatch(updateInputValue(alertIndex, itemIndex, value)),
        onSetErrorMessage: (alertIndex, itemIndex, errorMessage) => dispatch(setErrorMessage(alertIndex, itemIndex, errorMessage)),
        onSetCommunicationMethod: (alertIndex, itemIndex, iconIndex) => dispatch(setCommunicationMethod(alertIndex, itemIndex, iconIndex)),
        onSetCommunicationError: (alertIndex, itemIndex, errorMessage) => dispatch(setCommunicationError(alertIndex, itemIndex, errorMessage)),
        onUnSetCommunicationMethod: (alertIndex, itemIndex, iconIndex) => dispatch(unSetCommunicationMethod(alertIndex, itemIndex, iconIndex)),
        onUnSetCommunicationError: (alertIndex, itemIndex) => dispatch(unSetCommunicationError(alertIndex, itemIndex)),
        onTurnNotificationOn: (alertIndex, itemIndex) => dispatch(turnNotificationOn(alertIndex, itemIndex)),
        onTurnNotificationOff: (alertIndex, itemIndex) => dispatch(turnNotificationOff(alertIndex, itemIndex)),
        
    }
}


AlertItem.propTypes = {
    item: object,
    alertIndex: number, 
    itemIndex: number,
    communicationMethodClick: func
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertItem);
