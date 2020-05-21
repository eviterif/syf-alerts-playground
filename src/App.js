import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import alertsReducer from './store/reducer/alerts'; 

import AlertsList from './components/organisms/alerts/AlertsList';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  alertsData: alertsReducer
});

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(ReduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <AlertsList />
    </Provider>
    
  );
}

export default App;
