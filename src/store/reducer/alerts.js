import {
    GET_ALERTS_DATA,
    TURN_NOTIFICATION_ON,
    TURN_NOTIFICATION_OFF,
    SAVE_NOTIFICATION
} from '../actions/alerts';

const initialState = {
    alerts: []
}


const deepCopyFunction = (inObject) => {
    let outObject, value, key
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = deepCopyFunction(value)
    }
  
    return outObject
  }

const alertsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALERTS_DATA: 
            return {
                ...state,
                alerts: action.data
            }
        case TURN_NOTIFICATION_ON:
            let tmp_state_turn_on = deepCopyFunction(state);
            let alertIndex = action.alertIndex;
            let itemIndex = action.itemIndex;
            let communicationMethods = action.communicationMethods.map( (obj) => ({...obj}) );

            tmp_state_turn_on.alerts[alertIndex].items[itemIndex].header.isOn = true;  
            tmp_state_turn_on.alerts[alertIndex].items[itemIndex].icons = communicationMethods;

            if(tmp_state_turn_on.alerts[alertIndex].items[itemIndex].body.leftSection.input){
                tmp_state_turn_on.alerts[alertIndex].items[itemIndex].body.leftSection.input.inputValue = action.inputValue;
            }  
            return tmp_state_turn_on;

        case TURN_NOTIFICATION_OFF:
            let tmp_state_turn_off = deepCopyFunction(state);
            let alertIndex_off = action.alertIndex;
            let itemIndex_off = action.itemIndex;
            let communicationMethods_off = action.communicationMethods.map( (obj) => ({...obj}) );

            tmp_state_turn_off.alerts[alertIndex_off].items[itemIndex_off].header.isOn = false;  
            tmp_state_turn_off.alerts[alertIndex_off].items[itemIndex_off].icons = communicationMethods_off;

            if(tmp_state_turn_off.alerts[alertIndex_off].items[itemIndex_off].body.leftSection.input){
                tmp_state_turn_off.alerts[alertIndex_off].items[itemIndex_off].body.leftSection.input.inputValue = action.inputValue;
            }  
            return tmp_state_turn_off;

        case  SAVE_NOTIFICATION:
            let tmp_save_notification = deepCopyFunction(state);
            let alertIndex_save = action.alertIndex;
            let itemIndex_save = action.itemIndex;
            let communicationMethods_save = action.communicationMethods.map( (obj) => ({...obj}) );

            tmp_save_notification.alerts[alertIndex_save].items[itemIndex_save].icons = communicationMethods_save;

            if(tmp_save_notification.alerts[alertIndex_save].items[itemIndex_save].body.leftSection.input){
                tmp_save_notification.alerts[alertIndex_save].items[itemIndex_save].body.leftSection.input.inputValue = action.inputValue;
            }  
            return tmp_save_notification;


        default: 
            return state;
    }
}
export default alertsReducer; 