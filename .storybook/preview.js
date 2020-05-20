// .storybook/preview.js
import { addParameters } from '@storybook/react';
import {customViewports} from "./viewports"
import '../src/index.css';

addParameters({
    viewport: { viewports: customViewports },
});