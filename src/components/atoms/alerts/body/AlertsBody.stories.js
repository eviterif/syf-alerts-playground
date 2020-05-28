import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, boolean,number } from "@storybook/addon-knobs";
import AlertsBody from './AlertsBody';

export default {
    component: AlertsBody,
    title: 'Atoms/Alerts/Body',
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
    iconError: "",
    header: {
        title: "Transaction is over %s",
        isOn: false
    },
    body: {
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

const daysData = {
    icons: [
        {label: "Email", name:"faEnvelope", isOn: false},
        {label: "Text", name:"faComment", isOn: false},
        {label: "App", name:"faBell", isOn: false}
    ],
    iconError: "",
    header: {
        title: "Payment is due in %d days ",
        isOn: false
    },
    body: {                       
        leftSection: { 
            subtitle: "Send alert when:",
            title: "A payment is due in",
            input: {
                inputType: "select",
                inputIcon: "",
                inputPlaceholder: "5 days",
                inputValue: "",
                inputError: ""
            }
        },
        rightSection: {
            subtitle: "Select where to send alert:",
        }
    }
}

const noInputData = {
    icons: [
        {label: "Email", name:"faEnvelope", isOn: false},
        {label: "Text", name:"faComment", isOn: false},
        {label: "App", name:"faBell", isOn: false}
    ],
    iconError: "",
    header: {
        title: "Payment is scheduled",
        isOn: false
    },
    body: {                     
        leftSection: { 
            subtitle: "Send alert when:",
            title: "A payment is scheduled to be made on this account.", 
        },
        rightSection: {
            subtitle: "Select where to send alert:",
        }
    }
}


export const Amount = () => <AlertsBody 
                                item={object('Icons', itemData, 'Accordion')}
                                isExpanded={boolean("Is expanded", true, 'Accordion')}
                                alertIndex={number("Alert Index", 0, 'Accordion')}
                                itemIndex={number("Item Index", 0, 'Accordion')}
                                expandAccordionHandler={action('Expand/Close Accordion')}
                                buttonClickHandler={action('Button Click')}
                                inputChangeHandler={action('Input Change')}
                                communicationMethodClick={action('Communication method click')}
                            />

export const Days = () => <AlertsBody 
                            item={object('Icons', daysData, 'Accordion')}
                            isExpanded={boolean("Is expanded", true, 'Accordion')}
                            alertIndex={number("Alert Index", 0, 'Accordion')}
                            itemIndex={number("Item Index", 0, 'Accordion')}
                            expandAccordionHandler={action('Expand/Close Accordion')}
                            buttonClickHandler={action('Button Click')}
                            inputChangeHandler={action('Input Change')}
                            communicationMethodClick={action('Communication method click')}
                        />

export const NoInput = () => <AlertsBody 
                        item={object('Icons', noInputData, 'Accordion')}
                        isExpanded={boolean("Is expanded", true, 'Accordion')}
                        alertIndex={number("Alert Index", 0, 'Accordion')}
                        itemIndex={number("Item Index", 0, 'Accordion')}
                        expandAccordionHandler={action('Expand/Close Accordion')}
                        buttonClickHandler={action('Button Click')}
                        communicationMethodClick={action('Communication method click')}
                    />



