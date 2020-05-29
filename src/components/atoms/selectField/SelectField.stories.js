import React from 'react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import SelectField from './SelectField';

export default {
    component: SelectField,
    title: 'Atoms/Select Field',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Select = () => <SelectField 
                                inputValue="5"
                                inputError={text("Error Message", "", "Select Options")}
                                onInputChange={action("Select Change Handler")} />

export const SelectWithError = () => <SelectField 
                                inputValue=""
                                inputError={text("Error Message", "Please make a selection", "Select Options")}
                                onInputChange={action("Select Change Handler")} />


                            