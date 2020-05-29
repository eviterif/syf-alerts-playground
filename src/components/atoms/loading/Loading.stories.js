import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import Loading from './Loading';

export default {
    component: Loading,
    title: 'Atoms/Loading',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Default = () => <Loading />;


