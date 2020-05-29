import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import SectionTitle from './SectionTitle';

export default {
    component: SectionTitle,
    title: 'Atoms/Titles',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const AlertTitle = () =>  <SectionTitle title={text("Title", "SPENDING ALERTS", "Alerts")} iconName="" />
export const AlertTitleWithIcon = () =>  <SectionTitle title={text("Title", "SPENDING ALERTS", "Alerts")} iconName={text("Icon Name", "faCreditCard", "Alerts")} />
