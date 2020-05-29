import React from 'react';
import { withKnobs, text, object, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import InputField from './inputField';

export default {
    component: InputField,
    title: 'Atoms/Input Field',
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

export const Default = () => (
    <InputField 
        details={object('Input Data', {...inputData, inputIcon: ""} , 'Input Field')}
        inputValue={number("Value", 8000, "Input Field")}
        inputError={text("Error", "", "Input Field")}
        onInputChange={action("Input Change Handler")}/>
);

export const DefaultWithErrors = () => (
    <InputField 
        details={object('Input Data', {...inputData, inputIcon: ""} , 'Input Field')}
        inputValue={number("Value", 8000, "Input Field")}
        inputError={text("Error", "This is an error", "Input Field")}
        onInputChange={action("Input Change Handler")}/>
);

export const Icon = () => (
    <InputField 
        details={object('Input Data', inputData, 'Input Field')}
        inputValue={number("Value", 8000, "Input Field")}
        inputError={text("Error", "", "Input Field")}
        onInputChange={action("Input Change Handler")}/>
);

export const IconWithErrors = () => (
    <InputField 
        details={object('Input Data', inputData, 'Input Field')}
        inputValue={number("Value", 8000, "Input Field")}
        inputError={text("Error", "This is an error", "Input Field")}
        onInputChange={action("Input Change Handler")}/>
);