import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import alertsReducer from '../../../store/reducer/alerts'; 

import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import AlertsItem from './AlertsItem';

const rootReducer = combineReducers({
    alertsData: alertsReducer,
  });
  
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default {
    component: AlertsItem,
    title: 'Organisms/Alert Items',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

const itemData = {
    icons: [
        {label: "Email", name:"faEnvelope", isOn: false},
        {label: "Text", name:"faComment", isOn: false},
        {label: "App", name:"faBell", isOn: false}
    ],
    header: {
        title: "Transaction is over %s",
        isOn: false
    },
    body: {
        leftSection: { 
            subtitle: "Send alert when:",
            title: "A transaction occurs that is over:", 
            input: {
                inputType: "number",
                inputIcon: "faDollarSign",
                inputPlaceholder: "Amount",
                inputValue: "",
            }
        },
        rightSection: {
            subtitle: "Select where to send alert:",
        }
    },
};

export const AlertItemOFF = () => (
    <Provider store={store}>
        <AlertsItem 
            item={object('Data', itemData, 'Alert' )} 
            alertIndex="0" 
            itemIndex="0" />
    </Provider>
)

const itemDataON = {
    icons: [
        {label: "Email", name:"faEnvelope", isOn: true},
        {label: "Text", name:"faComment", isOn: true},
        {label: "App", name:"faBell", isOn: true}
    ],
    header: {
        title: "Transaction is over %s",
        isOn: true
    },
    body: {
        leftSection: { 
            subtitle: "Send alert when:",
            title: "A transaction occurs that is over:", 
            input: {
                inputType: "number",
                inputIcon: "faDollarSign",
                inputPlaceholder: "Amount",
                inputValue: 4000,
            }
        },
        rightSection: {
            subtitle: "Select where to send alert:",
        }
    },
};

export const AlertItemON = () => (
    <Provider store={store}>
        <AlertsItem 
            item={object('Data', itemDataON, 'Alert' )} 
            alertIndex="0" 
            itemIndex="0" />
    </Provider>
)