import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, boolean, number, text } from "@storybook/addon-knobs";
import AlertsBody from './AlertsBody';

export default {
    component: AlertsBody,
    title: 'Molecules/Alert Body',
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
        leftSection: { 
            subtitle: "Send alert when:",
            title: "A transaction occurs that is over:", 
            input: {
                inputType: "number",
                inputIcon: "faDollarSign",
                inputPlaceholder: "Amount",
                inputValue: "",
            }
        },
        rightSection: {
            subtitle: "Select where to send alert:",
        }
    },
};

const itemDataON = {
    icons: [
        {label: "Email", name:"faEnvelope", isOn: false},
        {label: "Text", name:"faComment", isOn: false},
        {label: "App", name:"faBell", isOn: false}
    ],
    header: {
        title: "Transaction is over %s",
        isOn: true
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
            }
        },
        rightSection: {
            subtitle: "Select where to send alert:",
        }
    },
};

const icons = [
    {label: "Email", name:"faEnvelope", isOn: false},
    {label: "Text", name:"faComment", isOn: false},
    {label: "App", name:"faBell", isOn: false}
]

const iconsON = [
    {label: "Email", name:"faEnvelope", isOn: true},
    {label: "Text", name:"faComment", isOn: true},
    {label: "App", name:"faBell", isOn: true}
]

export const NotificationOFF = () => <AlertsBody 
                                        item={object('Icons', itemData, 'Accordion')}
                                        isExpanded={boolean("Is expanded", true, 'Accordion')}
                                        inputValue={number("Value", 8000, "Input Field")}
                                        onInputChangeHandler={action('Input Change')}
                                        inputError={text("Input Error Message", "", "Accordion")}
                                        inputValueHasChanged={boolean("Input value changed?", false, 'Accordion')}
                                        communicationMethods={icons}
                                        onCommunicationMethodClickHandler={action('Cummunication Button Click')}
                                        communicationError={text("Communication Error Message", "", "Accordion")}
                                        communicationMethodsHasChanged={boolean("Communication has changed?", false, 'Accordion')}
                                        handleButtonClick={action('Button Click')}
                                        loading={boolean("Is loading?", false, 'Accordion')}
                                        buttonLabelClicked={text("Button Label Clicked", "TURN ON", "Accordion")}
                                    />

export const NotificationON = () => <AlertsBody 
                                        item={object('Icons', itemDataON, 'Accordion')}
                                        isExpanded={boolean("Is expanded", true, 'Accordion')}
                                        inputValue={number("Value", 8000, "Input Field")}
                                        onInputChangeHandler={action('Input Change')}
                                        inputError={text("Input Error Message", "", "Accordion")}
                                        inputValueHasChanged={boolean("Input value changed?", false, 'Accordion')}
                                        communicationMethods={iconsON}
                                        onCommunicationMethodClickHandler={action('Cummunication Button Click')}
                                        communicationError={text("Communication Error Message", "", "Accordion")}
                                        communicationMethodsHasChanged={boolean("Communication has changed?", false, 'Accordion')}
                                        handleButtonClick={action('Button Click')}
                                        loading={boolean("Is loading?", false, 'Accordion')}
                                        buttonLabelClicked={text("Button Label Clicked", "TURN ON", "Accordion")}
                                    />




