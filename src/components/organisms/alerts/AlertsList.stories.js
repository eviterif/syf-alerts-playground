import React from 'react';
import { withKnobs, object } from "@storybook/addon-knobs";
import AlertsList from './AlertsList';
import initialState from "./Accordion.Data";

export default {
    component: AlertsList,
    title: 'Molecules/Accordion',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const List = () => <AlertsList data={object('Data', initialState, 'Accordion' )}/>