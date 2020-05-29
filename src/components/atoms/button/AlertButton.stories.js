import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import AlertButton from './AlertButton';

export default {
    component: AlertButton,
    title: 'Atoms/Alerts/Buttons',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const Primary = () => (
  <AlertButton type="primary" onClickHandler={action("Button Click")}>
    {text("Text", "TURN OFF ", "Button")}
  </AlertButton>
);

export const Secondary = () => (
    <AlertButton type="secondary" onClickHandler={action("Button Click")}>
      {text("Text", "CLOSE", "Button")}
    </AlertButton>
  );