import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, boolean, number } from "@storybook/addon-knobs";
import AlertsHeader from './AlertsHeader';

export default {
    component: AlertsHeader,
    title: 'Molecules/Alert Header',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

const inputData = {
    inputType: "number",
    inputIcon: "faDollarSign",
    inputPlaceholder: "Amount",
    inputValue: "",
}

const iconsData = [
    {label: "Email", name:"faEnvelope", isOn: false},
    {label: "Text", name:"faComment", isOn: false},
    {label: "App", name:"faBell", isOn: false}
]

const iconsDataON = [
    {label: "Email", name:"faEnvelope", isOn: true},
    {label: "Text", name:"faComment", isOn: true},
    {label: "App", name:"faBell", isOn: true}
]

export const HeaderOFF = () => <AlertsHeader 
                                isExpanded={boolean("is expanded ", false, 'Accordion')}
                                title={text("Title", "Transaction is over", "Accordion")}
                                input={object('Input Settings', inputData, 'Accordion' )}
                                icons={object('Icons', iconsData, 'Accordion')}
                                expandAccordionHandler={action('Expand/Close Accordion')}
                                isNotificationON={boolean("Is notification on? ", false, 'Accordion')}
                            />
export const HeaderON = () => <AlertsHeader 
                                isExpanded={boolean("is expanded ", false, 'Accordion')}
                                title={text("Title", "Transaction is over", "Accordion")}
                                input={object('Input Settings', inputData, 'Accordion' )}
                                icons={object('Icons', iconsDataON, 'Accordion')}
                                expandAccordionHandler={action('Expand/Close Accordion')}
                                isNotificationON={boolean("Is notification on? ", true, 'Accordion')}
                            />