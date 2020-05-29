import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import InputField from './inputField';

export default {
    component: InputField,
    title: 'Atoms/Alerts/Input Field',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Amount = () => (
    <InputField 
        iconName={text("Icon Name", "faDollarSign", "Input Field")}
        inputType="number" 
        inputValue={text("Value", 8000, "Input Field")}
        changeHandler={action("Input Change Handler")}
        inputPlaceHolder={text("Place Holder", "Amount", "Input Field")} 
        hasErrors={ boolean("Has errors? ", false,  "Input Field")} 
        hasIcon={boolean("Has icon? ", true,  "Input Field") }
        errorMessage={text("Error Message", "", "Input Field")}
    />
);

export const AmountError = () => (
    <InputField 
        iconName={text("Icon Name", "faDollarSign", "Input Field")}
        inputType="number" 
        inputValue={text("Value", "", "Input Field")}
        changeHandler={action("Input Change Handler")}
        inputPlaceHolder={text("Place Holder", "Amount", "Input Field")} 
        hasErrors={ boolean("Has errors? ", true,  "Input Field")} 
        hasIcon={boolean("Has icon? ", true,  "Input Field") }
        errorMessage={text("Error Message", "This Field is required", "Input Field")}
    />
);

export const Number = () => (
    <InputField 
        iconName=""
        inputType="number" 
        inputValue={text("Value", "", "Input Field")}
        changeHandler={action("Input Change Handler")}
        inputPlaceHolder={text("Place Holder", "5 Days", "Input Field")} 
        hasErrors={ boolean("Has errors? ", false,  "Input Field")} 
        hasIcon={boolean("Has icon? ", false,  "Input Field") }
        errorMessage={text("Error Message", "", "Input Field")}
    />
);

export const NumberError = () => (
    <InputField 
        iconName=""
        inputType="number" 
        inputValue={text("Value", "", "Input Field")}
        changeHandler={action("Input Change Handler")}
        inputPlaceHolder={text("Place Holder", "5 Days", "Input Field")} 
        hasErrors={ boolean("Has errors? ", true,  "Input Field")} 
        hasIcon={boolean("Has icon? ", false,  "Input Field") }
        errorMessage={text("Error Message", "This field is required", "Input Field")}
    />
);

