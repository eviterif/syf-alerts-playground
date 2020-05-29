import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import { object, func, array, string, bool} from 'prop-types';

import {AccordionBodyRightIconWrapper, IconWrapper, ErrorMessage } from './AlertsBodyStyles';

import AlertButton from '../../atoms/button/AlertButton';
import Loading from '../../atoms/loading/Loading';

const AlertsBodyRight = ({ 
    item, 
    communicationMethods, 
    communicationMethodClick, 
    communicationError,
    communicationMethodsHasChanged,  
    loading, 
    inputValueHasChanged, 
    onButtonClick,    
    buttonLabelClicked  
}) => {
    return (
        <div className="accordionBody-right">
            <div className="accordionBody-right-top">
                <div className="accordionBody-subtitle">{item.body.rightSection.subtitle}</div>
                    <div className="accordionBody-right-icon-wrapper">
                        {
                            communicationMethods.map( (icon, iconIndex) => (
                                <AccordionBodyRightIconWrapper  
                                    key={iconIndex} 
                                    onClick={ () => communicationMethodClick(iconIndex) } 
                                    isSelected={icon.isOn ? true : false} >
                                        <span className="accordionBody-right-icon-item-title">{icon.label}</span>
                                        <IconWrapper isSelected={icon.isOn ? true : false} hasErrors={communicationError !== '' ? true : false}>
                                            <FontAwesomeIcon 
                                                className="fontAwesomeIcon" 
                                                icon={faSolid[icon.name]} 
                                                color={icon.isOn ? "white" : "#d7d7d7"} /> 
                                        </IconWrapper>
                                </AccordionBodyRightIconWrapper>
                            ))
                        }  
                    </div>
                    { communicationError !== '' && <ErrorMessage> <FontAwesomeIcon icon={faSolid["faExclamationCircle"]}/> {communicationError}</ErrorMessage> }
            </div>
            <div className="accordionBody-right-bottom">
                {   item.header.isOn  && 
                    <>
                        <AlertButton 
                            type="secondary" 
                            isLoading={loading && buttonLabelClicked === "TURN OFF" ? true : false} 
                            onClickHandler={() => { onButtonClick("TURN OFF"); }} > 
                                TURN OFF {loading && buttonLabelClicked === "TURN OFF" && <Loading display="inline" type="primary" />}
                        </AlertButton> 
                        
                        <AlertButton 
                            type="primary" 
                            isLoading={ loading && buttonLabelClicked === "SAVE" ? true : inputValueHasChanged || communicationMethodsHasChanged ? false : true} 
                            onClickHandler={() => { onButtonClick("SAVE"); }} > 
                                SAVE {loading && buttonLabelClicked === "SAVE" && <Loading display="inline" type="primary" />}
                        </AlertButton> 
                    </>
                }
                {
                    !item.header.isOn &&
                        <AlertButton 
                            type="primary" 
                            isLoading={loading && buttonLabelClicked === "TURN ON" ? true : false} 
                            onClickHandler={() => { onButtonClick("TURN ON") }} >  
                                TURN ON {loading && buttonLabelClicked === "TURN ON" && <Loading display="inline" type="primary" />} 
                        </AlertButton>
                }
            </div>
        </div> 
    )
}

AlertsBodyRight.propTypes = {
    item: object, 
    communicationMethods: array,
    communicationMethodClick: func,
    communicationError: string,
    communicationMethodsHasChanged: bool,
    loading: bool,
    inputValueHasChanged: bool,
    onButtonClick: func,
    buttonLabelClicked: string,
}

export default AlertsBodyRight;