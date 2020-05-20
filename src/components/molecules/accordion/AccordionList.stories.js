import React from 'react';
import { withKnobs, object } from "@storybook/addon-knobs";
import AccordionList from './AccordionList';
import initialState from "./Accordion.Data";

export default {
    component: AccordionList,
    title: 'Molecules/Accordion',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const List = () => <AccordionList data={object('Data', initialState, 'Accordion' )}/>