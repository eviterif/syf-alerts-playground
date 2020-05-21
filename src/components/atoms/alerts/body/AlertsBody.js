import React from "react";
import { number, func, object, bool} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import {AccordionBodyWrapper, Input, AccordionBodyRightIconWrapper, Button } from './AlertsBodyStyles';

export default function AlertsBody({
    item, 
    isExpanded, 
    alertIndex, 
    itemIndex, 
    inputChangeHandler, 
    buttonClickHandler, 
    expandAccordionHandler,
    communicationMethodClick
}){
    return (
        <AccordionBodyWrapper isExpanded={isExpanded} >
            <div className="accordionBodyInnerWrapper">
                <div className="accordionBody-left">
                    <div className="accordionBody-subtitle">{item.body.leftSection.subtitle}</div>
                    <div className="accordionBody-amount-wrapper">
                        <div>{item.body.leftSection.title}</div>
                        { 
                            item.body.leftSection.input && 
                                <div>
                                    {
                                        item.body.leftSection.input.inputIcon !== '' &&
                                        <FontAwesomeIcon 
                                            className="dollarSignIcon" 
                                            icon={faSolid[item.body.leftSection.input.inputIcon]}/>
                                    }
                                    
                                    <Input 
                                        type={item.body.leftSection.input.inputType}
                                        value={item.body.leftSection.input.inputValue}
                                        onChange={ (e) => { inputChangeHandler(alertIndex, itemIndex, e.currentTarget.value) }}
                                        placeholder={item.body.leftSection.input.inputPlaceholder} 
                                        hasErrors={ item.body.leftSection.input.inputError !== '' ? true : false } 
                                        hasIcon={item.body.leftSection.input.inputIcon !== '' ? true : false } />
                                    <div className="errorMessage">{item.body.leftSection.input.inputError}</div>
                                </div> 
                        }
                        { 
                            item.body.leftSection.tag &&
                            <div className="accordionBody-tagline">{item.body.leftSection.tag}</div>
                        }
                        
                    </div>
                </div> 
                <div className="accordionBody-right">
                    <div className="accordionBody-right-top">
                        <div className="accordionBody-subtitle">{item.body.rightSection.subtitle}</div>
                            <div className="accordionBody-right-icon-wrapper">
                                {
                                    item.icons.map( (icon, iconIndex) => (
                                        <AccordionBodyRightIconWrapper key={iconIndex} onClick={ () => communicationMethodClick(alertIndex, itemIndex, iconIndex) }>
                                            <span className="accordionBody-right-icon-item-title">{icon.label}</span>
                                            <span className="accordionBody-right-icon-item-icon">
                                                <FontAwesomeIcon 
                                                    className="fontAwesomeIcon" 
                                                    icon={faSolid[icon.name]} 
                                                    color={icon.isOn ? "#307ab0" : "#d7d7d7"} /> 
                                            </span>
                                        </AccordionBodyRightIconWrapper>
                                    ))
                                }
                            </div>
                    </div>
                    <div className="accordionBody-right-bottom">
                        <Button buttonType="secondary" onClick={ () => expandAccordionHandler() } >
                            CLOSE
                        </Button>
                        <Button 
                            buttonType="primary" 
                            onClick={ () => buttonClickHandler(
                                                alertIndex, 
                                                itemIndex, 
                                                item.header.isOn ? "TURN OFF" : "TURN ON"
                        )} >
                                {item.header.isOn ? "TURN OFF" : "TURN ON"}
                        </Button>
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
    inputChangeHandler: func, 
    buttonClickHandler: func, 
    expandAccordionHandler: func,
    communicationMethodClick: func
}