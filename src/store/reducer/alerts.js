import {
    GET_ALERTS_DATA,
    UPDATE_INPUT_VALUE,
    SET_ERROR_MESSAGE,
    SET_COMMUNICATION_METHOD,
    SET_COMMUNICATION_ERROR,
    UNSET_COMMUNICATION_METHOD,
    UNSET_COMMUNICATION_ERROR,
    TURN_NOTIFICATION_ON,
    TURN_NOTIFICATION_OFF
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
        case UPDATE_INPUT_VALUE:
            let temporary_state = deepCopyFunction(state);
                temporary_state.alerts[action.alertIndex].items[action.itemIndex].body.leftSection.input.inputValue = action.value;
            return temporary_state;
        case SET_ERROR_MESSAGE:
            let tmp_state_error_message = deepCopyFunction(state);
                tmp_state_error_message.alerts[action.alertIndex].items[action.itemIndex].body.leftSection.input.inputError = action.errorMessage;
            return tmp_state_error_message;
        case SET_COMMUNICATION_METHOD: 
            let tmp_communication_method_state = deepCopyFunction(state);
                tmp_communication_method_state.alerts[action.alertIndex].items[action.itemIndex].icons[action.iconIndex].isOn = true;
            return  tmp_communication_method_state;
        case SET_COMMUNICATION_ERROR: 
            let tmp_communication_error = deepCopyFunction(state);
                tmp_communication_error.alerts[action.alertIndex].items[action.itemIndex].iconError = action.errorMessage;
                return tmp_communication_error;
        case UNSET_COMMUNICATION_METHOD:
            let tmp_communication_unset_method_state = deepCopyFunction(state);
                tmp_communication_unset_method_state.alerts[action.alertIndex].items[action.itemIndex].icons[action.iconIndex].isOn = false;
            return tmp_communication_unset_method_state;
        case UNSET_COMMUNICATION_ERROR: 
            let tmp_unset_communication_error = deepCopyFunction(state);
                tmp_unset_communication_error.alerts[action.alertIndex].items[action.itemIndex].iconError = "";
                return tmp_unset_communication_error;
        case TURN_NOTIFICATION_ON:
            let tmp_state_turn_on = deepCopyFunction(state);
                tmp_state_turn_on.alerts[action.alertIndex].items[action.itemIndex].header.isOn = true;
            return tmp_state_turn_on;
        case TURN_NOTIFICATION_OFF:
            let tmp_state_turn_off = deepCopyFunction(state);
                tmp_state_turn_off.alerts[action.alertIndex].items[action.itemIndex].header.isOn = false;
            return tmp_state_turn_off;
        default: 
            return state;
    }
}
export default alertsReducer; 