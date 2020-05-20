import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import {AccordionHeaderWrapper} from './AccordionHeaderStyles';

export default function AccordionHeader({isVisible, isNotificationON, title, input, icons, alertIndex, itemIndex, clickHandler, communicationMethodClick}){
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
        <AccordionHeaderWrapper isExpanded={isVisible} isON={ isNotificationON ? true : false }>
            <div className="accordionHeaderLeft">
                <span>
                    {header_tittle} 
                </span>
                <div className="iconsWrapper">
                    {icons.map( (icon, iconIndex) => (
                        <span key={iconIndex} onClick={ () => communicationMethodClick(alertIndex, itemIndex, iconIndex) }> 
                            <FontAwesomeIcon 
                                className="fontAwesomeIcon" 
                                icon={faSolid[icon.name]} 
                                color={icon.isOn ? "#307ab0" : "#d7d7d7"} /> 
                        </span>
                    ))}
                    
                </div>
            </div>
            <div className="accordionHeaderRight">
                <span>{ isNotificationON ? "ON" : "OFF" }</span>
                <span className="caretDown" onClick={ () => clickHandler(alertIndex, itemIndex) } >
                    <FontAwesomeIcon 
                        className="fontAwesomeIcon" 
                        icon={faSolid["faCaretDown"]} 
                        transform={{ rotate: isVisible? 180 : 0 }}/>
                </span>
            </div>
        </AccordionHeaderWrapper>
    )
}
