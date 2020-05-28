import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import SelectField from './SelectField';

export default {
    component: SelectField,
    title: 'Atoms/Alerts/Select Field',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Select = () => <SelectField 
                                inputValue={text("Value", "", "Input Field")}
                                changeHandler={action("Select Change Handler")}
                                hasErrors={ boolean("Has errors? ", false,  "Input Field")} 
                                errorMessage={text("Error Message", "", "Input Field")}
                            />