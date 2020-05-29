import React from "react";
import {object, bool, string, func, array} from 'prop-types';
import {AccordionBodyWrapper} from './AlertsBodyStyles';

import AlertsBodyLeft from './AlertsBodyLeft';
import AlertsBodyRight from './AlertsBodyRight';

const AlertsBody = ({ 
    item, 
    isExpanded,
    inputValue,
    onInputChangeHandler,
    inputError,
    inputValueHasChanged,
    communicationMethods,
    onCommunicationMethodClickHandler,
    communicationError,
    communicationMethodsHasChanged,
    handleButtonClick,
    loading,
    buttonLabelClicked,
 }) => {

    return (
        <AccordionBodyWrapper isExpanded={isExpanded} >
            <div className="accordionBodyInnerWrapper">
                <AlertsBodyLeft 
                    item={item} 
                    inputValue= {inputValue}
                    onInputChange={onInputChangeHandler}
                    inputError={inputError} />

                <AlertsBodyRight 
                     item={item} 
                     communicationMethods={communicationMethods}
                     communicationMethodClick={onCommunicationMethodClickHandler}
                     communicationError={communicationError}
                     onButtonClick={handleButtonClick}
                     loading={loading}
                     buttonLabelClicked={buttonLabelClicked}
                     inputValueHasChanged={inputValueHasChanged}
                     communicationMethodsHasChanged={communicationMethodsHasChanged}/>      
            </div>
        </AccordionBodyWrapper>
    )
}

AlertsBody.propTypes = {
    item: object, 
    isExpanded: bool,
    inputValue: string,
    onInputChangeHandler: func,
    inputError: string,
    inputValueHasChanged: bool,
    communicationMethods: array,
    onCommunicationMethodClickHandler: func,
    communicationError: string,
    communicationMethodsHasChanged: bool,
    handleButtonClick: func,
    loading: bool,
    buttonLabelClicked: string
}

export default AlertsBody;
