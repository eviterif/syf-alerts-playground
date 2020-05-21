export const GET_ALERTS_DATA = 'GET_ALERTS_DATA';

export const getAlertsData = () => {
    return async dispatch => {
        try {
            //Simulating Ajax Request
            let resposne = await setTimeout(function(){
                
            }, 5000);
        }catch(error){
            console.log(error);
        }
    }
}