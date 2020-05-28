import React from "react";
import { number, func, object, bool} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import {AccordionBodyWrapper, AccordionBodyRightIconWrapper, IconWrapper, ErrorMessage } from './AlertsBodyStyles';

import AlertButton from '../button/AlertButton';
import InputField from '../inputField/inputField';
import SelectField from '../selectField/SelectField';

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
                            item.body.leftSection.input && item.body.leftSection.input.inputType === 'number' &&
                                <InputField 
                                    iconName={item.body.leftSection.input.inputIcon}
                                    inputType={item.body.leftSection.input.inputType} 
                                    inputValue={item.body.leftSection.input.inputValue}
                                    changeHandler={(e) => { inputChangeHandler(alertIndex, itemIndex, e.currentTarget.value) }}
                                    inputPlaceHolder={item.body.leftSection.input.inputPlaceholder} 
                                    hasErrors={ item.body.leftSection.input.inputError !== '' ? true : false } 
                                    hasIcon={item.body.leftSection.input.inputIcon !== '' ? true : false }
                                    errorMessage={item.body.leftSection.input.inputError}
                                />
                        }
                        {
                            item.body.leftSection.input && item.body.leftSection.input.inputType === 'select' &&
                                <SelectField 
                                    inputValue={item.body.leftSection.input.inputValue}
                                    changeHandler={(e) => { inputChangeHandler(alertIndex, itemIndex, e.currentTarget.value) }}
                                    hasErrors={ item.body.leftSection.input.inputError !== '' ? true : false } 
                                    errorMessage={item.body.leftSection.input.inputError}
                                />
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
                                        <AccordionBodyRightIconWrapper 
                                            key={iconIndex} 
                                            onClick={ () => communicationMethodClick(alertIndex, itemIndex, iconIndex) }
                                            isSelected={icon.isOn ? true : false}
                                        >
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
                            <AlertButton 
                                type="secondary"  
                                onClickHandler={() => {
                                    buttonClickHandler(alertIndex, itemIndex, "TURN OFF");
                                    expandAccordionHandler();
                                }}  
                            > 
                                TURN OFF 
                            </AlertButton> 
                        }
                        <AlertButton 
                            type="primary" 
                            onClickHandler={() => buttonClickHandler(alertIndex, itemIndex, item.header.isOn ? "SAVE" : "TURN ON")} >  
                                {item.header.isOn ? "SAVE" : "TURN ON"}  
                        </AlertButton>
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
