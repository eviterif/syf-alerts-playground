import React from "react";
import {string, func, object, array, bool} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import {AccordionHeaderWrapper} from './AlertsHeaderStyles';

export default function AlertsHeader({
    isExpanded, 
    isNotificationON, 
    title, 
    input, 
    icons, 
    expandAccordionHandler, 
}){
    let header_tittle = title;
    let dollar_pattern =  /(?:%s)/;
    let date_pattern = /(?:%d)/;

    if(dollar_pattern.test(header_tittle)){
        if(input.inputValue === ""){
            header_tittle = header_tittle.replace("%s", "$ _______");
        }else{
            header_tittle = header_tittle.replace("%s", `$ ${input.inputValue}` );
        }
    }

    if(date_pattern.test(header_tittle)){
        if(input.inputValue === ""){
            header_tittle = header_tittle.replace("%d", "___");
        }else{
            header_tittle = header_tittle.replace("%d", input.inputValue );
        }
    }

    return (
        <AccordionHeaderWrapper isExpanded={isExpanded} isON={ isNotificationON ? true : false }>
            <div className="accordionHeaderLeft">
                <span>
                    {header_tittle} 
                </span>
                <div className="iconsWrapper">
                    {icons.map( (icon, iconIndex) => (
                        <span key={iconIndex}> 
                            <FontAwesomeIcon 
                                icon={faSolid[icon.name]} 
                                color={icon.isOn ? "#307ab0" : "#d7d7d7"} /> 
                        </span>
                    ))}
                    
                </div>
            </div>
            <div className="accordionHeaderRight">
                <span>{ isNotificationON ? "ON" : "OFF" }</span>
                <span className="caretDown" onClick={ () => expandAccordionHandler() } >
                    <FontAwesomeIcon 
                        className="fontAwesomeIcon" 
                        icon={faSolid["faCaretDown"]} 
                        transform={{ rotate: isExpanded? 180 : 0 }}/>
                </span>
            </div>
        </AccordionHeaderWrapper>
    )
}

AlertsHeader.propTypes = {
    isExpanded: bool,
    isNotificationON: bool, 
    title: string, 
    input: object, 
    icons: array, 
    expandAccordionHandler: func
}