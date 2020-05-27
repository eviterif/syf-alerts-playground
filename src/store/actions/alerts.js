import initialState from "./Alerts.Data";

export const GET_ALERTS_DATA = 'GET_ALERTS_DATA';
export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_COMMUNICATION_METHOD = 'SET_COMMUNICATION_METHOD';
export const SET_COMMUNICATION_ERROR = 'SET_COMMUNICATION_ERROR';
export const UNSET_COMMUNICATION_METHOD = 'UNSET_COMMUNICATION_METHOD';
export const UNSET_COMMUNICATION_ERROR = 'UNSET_COMMUNICATION_ERROR';
export const TURN_NOTIFICATION_ON = 'TURN_NOTIFICATION_ON';
export const TURN_NOTIFICATION_OFF = 'TURN_NOTIFICATION_OFF';

export const getAlertsData = () => {
    return async dispatch => {
        try {
            //Simulating Ajax Request
            let promise = new Promise((resolve, reject ) => {
                setTimeout(() => resolve(initialState.alerts), 1000)
            })

            let response = await promise;

            dispatch({
                type: GET_ALERTS_DATA,
                data: response
            })
        }catch(error){
            console.log(error);
        }
    }
}

export const updateInputValue = (alertIndex, itemIndex, value) => {
    return {
        type: UPDATE_INPUT_VALUE,
        alertIndex,
        itemIndex,
        value
    }
}

export const setErrorMessage = (alertIndex, itemIndex, errorMessage) => {
    return {
        type: SET_ERROR_MESSAGE, 
        alertIndex, 
        itemIndex, 
        errorMessage
    }
}

export const setCommunicationMethod = (alertIndex, itemIndex, iconIndex) => {
    return {
        type: SET_COMMUNICATION_METHOD, 
        alertIndex, 
        itemIndex, 
        iconIndex
    }
}

export const setCommunicationError = (alertIndex, itemIndex, errorMessage) => {
    return {
        type: SET_COMMUNICATION_ERROR, 
        alertIndex, 
        itemIndex, 
        errorMessage
    }
}

export const unSetCommunicationMethod = (alertIndex, itemIndex, iconIndex) => {
    return {
        type: UNSET_COMMUNICATION_METHOD, 
        alertIndex, 
        itemIndex, 
        iconIndex
    }
}

export const unSetCommunicationError = (alertIndex, itemIndex) => {
    return {
        type: UNSET_COMMUNICATION_ERROR, 
        alertIndex, 
        itemIndex 
    }
}

export const turnNotificationOn = ( alertIndex, itemIndex ) =>{
    return {
        type: TURN_NOTIFICATION_ON, 
        alertIndex, 
        itemIndex
    }
}

export const turnNotificationOff = ( alertIndex, itemIndex ) =>{
    return {
        type: TURN_NOTIFICATION_OFF, 
        alertIndex, 
        itemIndex
    }
}