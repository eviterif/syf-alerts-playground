import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import SectionTitle from './SectionTitle';

export default {
    component: SectionTitle,
    title: 'Atoms/Alerts/Section Title',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Title = () =>  <SectionTitle title={text("Title", "SPENDING ALERTS", "Alerts")} iconName={text("Icon Name", "faCreditCard", "Alerts")} />
