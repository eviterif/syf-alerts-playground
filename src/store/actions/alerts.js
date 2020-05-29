import initialState from "./Alerts.Data";

export const GET_ALERTS_DATA = 'GET_ALERTS_DATA';
export const TURN_NOTIFICATION_ON = 'TURN_NOTIFICATION_ON';
export const TURN_NOTIFICATION_OFF = 'TURN_NOTIFICATION_OFF';
export const SAVE_NOTIFICATION = 'SAVE_NOTIFICATION';

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

export const turnNotificationOn = ( alertIndex, itemIndex, inputValue="", communicationMethods ) =>{
    return async dispatch => {
        try {
            //Simulating Ajax Request
            let promise = new Promise((resolve, reject ) => {
                setTimeout(() => resolve(initialState.alerts), 3000)
            })

            let response = await promise;

            dispatch({
                type: TURN_NOTIFICATION_ON, 
                alertIndex, 
                itemIndex,
                inputValue, 
                communicationMethods
            })
        }catch(error){
            console.log(error);
        }
    }
}



export const turnNotificationOff = ( alertIndex, itemIndex, inputValue="", communicationMethods  ) =>{
    return async dispatch => {
            try {
                //Simulating Ajax Request
                let promise = new Promise((resolve, reject ) => {
                    setTimeout(() => resolve(initialState.alerts), 3000)
                })

                let response = await promise;

                dispatch({
                    type: TURN_NOTIFICATION_OFF, 
                    alertIndex, 
                    itemIndex,
                    inputValue, 
                    communicationMethods
                })
            }catch(error){
                console.log(error);
            }
    }
}

export const saveNotification = ( alertIndex, itemIndex, inputValue="", communicationMethods ) =>{
    return async dispatch => {
        try {
            //Simulating Ajax Request
            let promise = new Promise((resolve, reject ) => {
                setTimeout(() => resolve(initialState.alerts), 3000)
            })

            let response = await promise;

            dispatch({
                type: SAVE_NOTIFICATION, 
                alertIndex, 
                itemIndex,
                inputValue, 
                communicationMethods
            })
        }catch(error){
            console.log(error);
        }
    }
}
