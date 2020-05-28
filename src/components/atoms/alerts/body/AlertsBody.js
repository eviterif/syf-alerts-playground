import React from "react";
import { number, object, bool} from 'prop-types';
import {AccordionBodyWrapper} from './AlertsBodyStyles';


import AlertsBodyLeft from './AlertsBodyLeft';
import AlertsBodyRight from './AlertsBodyRight';

export default function AlertsBody({
    item, 
    isExpanded, 
    alertIndex, 
    itemIndex
}){
    return (
        <AccordionBodyWrapper isExpanded={isExpanded} >
            <div className="accordionBodyInnerWrapper">

                <AlertsBodyLeft alertIndex={alertIndex} itemIndex={itemIndex} item={item} />

                <AlertsBodyRight  alertIndex={alertIndex} itemIndex={itemIndex} item={item} />
            </div>
        </AccordionBodyWrapper>
    )
}

AlertsBody.propTypes = {
    item: object, 
    isExpanded: bool, 
    alertIndex: number, 
    itemIndex: number
}
