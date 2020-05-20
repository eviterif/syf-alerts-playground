import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import AccordionItem from './AccordionItem';

export default {
    component: AccordionItem,
    title: 'Atoms/Accordion',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

const itemData = {
    icons: [
        {label: "Email", name:"faEnvelope", isOn: false},
        {label: "Text", name:"faComment", isOn: false},
        {label: "App", name:"faBell", isOn: false}
    ],
    header: {
        title: "Transaction is over %s",
        isOn: false
    },
    body: {
        isVisible: false,
        leftSection: { 
            subtitle: "Send alert when:",
            title: "A transaction occurs that is over:", 
            input: {
                inputType: "number",
                inputIcon: "faDollarSign",
                inputPlaceholder: "Amount",
                inputValue: "",
                inputError: ""
            }
                
            
        },
        rightSection: {
            subtitle: "Select where to send alert:",
        }
    }
};

const itemActions = {
    clickHandler: action('expand accordion'),
    communicationMethodClick: action('cumminication icon click'),
    buttonClickHandler: action('action buttons click'),
    inputChangeHandler: action('input change event')
}

export const Default = () => <AccordionItem item={object('Data', itemData, 'Accordion' )} alertIndex="0" itemIndex="0" {...itemActions} />

const itemDateCloseOn = {
    ...itemData,
    icons: [
        {label: "Email", name:"faEnvelope", isOn: true},
        {label: "Text", name:"faComment", isOn: false},
        {label: "App", name:"faBell", isOn: true}
    ],
    header: {
        ...itemData.header,
        isOn: true
    },
    body: {
        ...itemData.body,
        leftSection:{
            ...itemData.body.leftSection,
            input: {
                ...itemData.body.leftSection.input,
                inputValue: 4000
            }
        }
    }
}

export const AccordionCloseOn = () => <AccordionItem item={object('Data', itemDateCloseOn, 'Accordion' )} alertIndex="0" itemIndex="0" {...itemActions} />

const itemDataOpen = {
    ...itemData,
    body: {
        ...itemData.body,
        isVisible: true
    } 
}

export const AccordionOpenOff = () => <AccordionItem item={object('Data', itemDataOpen, 'Accordion' )} alertIndex="0" itemIndex="0" {...itemActions} />

const itemDataOpenOn = {
    ...itemDateCloseOn,
    body: {
        ...itemDateCloseOn.body,
        isVisible: true
    }
}

export const AccordionOpenOn = () => <AccordionItem item={object('Data', itemDataOpenOn, 'Accordion' )} alertIndex="0" itemIndex="0" {...itemActions} />