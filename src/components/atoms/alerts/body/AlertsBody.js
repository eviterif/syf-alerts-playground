import React from "react";
import { number, func, object, bool} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import {AccordionBodyWrapper, AccordionBodyRightIconWrapper, IconWrapper, ErrorMessage } from './AlertsBodyStyles';

import AlertButton from '../button/AlertButton';
import Loading from '../loading/Loading';

import AlertsBodyLeft from './AlertsBodyLeft';

export default function AlertsBody({
    item, 
    isExpanded, 
    alertIndex, 
    itemIndex, 
    buttonClickHandler, 
    communicationMethodClick
}){
    return (
        <AccordionBodyWrapper isExpanded={isExpanded} >
            <div className="accordionBodyInnerWrapper">

                <AlertsBodyLeft alertIndex={alertIndex} itemIndex={itemIndex} item={item} />

                <div className="accordionBody-right">
                    <div className="accordionBody-right-top">
                        <div className="accordionBody-subtitle">{item.body.rightSection.subtitle}</div>
                            <div className="accordionBody-right-icon-wrapper">
                                {
                                    item.icons.map( (icon, iconIndex) => (
                                        <AccordionBodyRightIconWrapper  key={iconIndex} onClick={ () => communicationMethodClick(alertIndex, itemIndex, iconIndex) } isSelected={icon.isOn ? true : false} >
                                                <span className="accordionBody-right-icon-item-title">{icon.label}</span>
                                                <IconWrapper isSelected={icon.isOn ? true : false} hasErrors={item.iconError !== '' ? true : false}>
                                                    <FontAwesomeIcon 
                                                        className="fontAwesomeIcon" 
                                                        icon={faSolid[icon.name]} 
                                                        color={icon.isOn ? "white" : "#d7d7d7"} /> 
                                                </IconWrapper>
                                        </AccordionBodyRightIconWrapper>
                                    ))
                                }
                                
                            </div>
                            { item.iconError !== '' && <ErrorMessage> <FontAwesomeIcon icon={faSolid["faExclamationCircle"]}/> {item.iconError}</ErrorMessage> }
                    </div>
                    <div className="accordionBody-right-bottom">
                        {   item.header.isOn  && 
                            <>
                                <AlertButton type="secondary" isLoading={item.isLoading}
                                    onClickHandler={() => {
                                        buttonClickHandler(alertIndex, itemIndex, "TURN OFF");
                                        //expandAccordionHandler();
                                    }}  
                                > 
                                    TURN OFF {item.isLoading &&  <Loading display="inline" type="secondary" />}
                                </AlertButton> 
                                
                                <AlertButton type="primary" onClickHandler={() => { buttonClickHandler(alertIndex, itemIndex, "SAVE"); }} > 
                                    SAVE 
                                </AlertButton> 
                            </>
                        }
                        {
                            !item.header.isOn &&
                                <AlertButton type="primary" isLoading={item.isLoading} onClickHandler={() => { buttonClickHandler(alertIndex, itemIndex, "TURN ON") }} >  
                                        TURN ON {item.isLoading &&  <Loading display="inline" type="primary" />}
                                </AlertButton>
                        }
                        
                    </div>
                </div> 
            </div>
        </AccordionBodyWrapper>
    )
}

AlertsBody.propTypes = {
    item: object, 
    isExpanded: bool, 
    alertIndex: number, 
    itemIndex: number, 
    buttonClickHandler: func, 
    communicationMethodClick: func
}
