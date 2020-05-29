import React from 'react';
import { string, object, func} from 'prop-types';

import InputField from '../inputField/inputField';
import SelectField from '../selectField/SelectField';

const AlertsBodyLeft = ({ item, inputValue, onInputChange, inputError }) => {
    return(
        <div className="accordionBody-left">
            <div className="accordionBody-subtitle">{item.body.leftSection.subtitle}</div>
            <div className="accordionBody-amount-wrapper">
                <div>{item.body.leftSection.title}</div>
                { 
                    item.body.leftSection.input && item.body.leftSection.input.inputType === 'number' &&
                       <InputField 
                            details={item.body.leftSection.input} 
                            inputValue={inputValue}
                            inputError={inputError}
                            onInputChange={onInputChange} />
                }
                {
                    item.body.leftSection.input && item.body.leftSection.input.inputType === 'select' &&
                        <SelectField 
                            inputValue={inputValue}
                            inputError={inputError}
                            onInputChange={onInputChange} />
                }
                { 
                    item.body.leftSection.tag &&
                    <div className="accordionBody-tagline">{item.body.leftSection.tag}</div>
                }  
            </div>
        </div> 
    )
}

AlertsBodyLeft.propTypes = {
    item: object, 
    inputValue: string, 
    onInputChange: func, 
    inputError: string
}

export default AlertsBodyLeft;