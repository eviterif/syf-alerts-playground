import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import AlertButton from "./AlertButton";
import Loading from "../loading/Loading";

export default {
  component: AlertButton,
  title: "Atoms/Buttons",
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Primary = () => (
  <AlertButton type="primary" onClickHandler={action("Button Click")}>
    {text("Text", "TURN ON ", "Button")}
  </AlertButton>
);

export const Secondary = () => (
  <AlertButton type="secondary" onClickHandler={action("Button Click")}>
    {text("Text", "TURN OFF", "Button")}
  </AlertButton>
);

export const Disabled = () => (
  <AlertButton
    type="primary"
    onClickHandler={action("Button Click")}
    isLoading={boolean("Disabled", true, "Button")}
  >
    {text("Text", "SAVE ", "Button")}
  </AlertButton>
);

export const DisabledLoading = () => (
  <AlertButton
    type="primary"
    onClickHandler={action("Button Click")}
    isLoading={boolean("Disabled", true, "Button")}
  >
    {text("Text", "SAVE ", "Button")}
    <Loading display="inline" type="primary" />
  </AlertButton>
);
