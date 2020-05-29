import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import alertsReducer from '../../../store/reducer/alerts'; 

import { withKnobs, object } from "@storybook/addon-knobs";
import AlertsList from './AlertsList';

const rootReducer = combineReducers({
  alertsData: alertsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default {
    component: AlertsList,
    title: 'Organisms/Alerts',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const List = () => <Provider store={store}><AlertsList /></Provider>

