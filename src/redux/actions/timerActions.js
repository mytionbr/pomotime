import { TIMER_SETUP } from "../constants/timerConstants";

export const configureCounter = () => (dispatch,getState)=>{
    const {
       pomotimerInfo
    } = getState();

    dispatch({type: TIMER_SETUP, payload: pomotimerInfo});

}