import { TIMER_SETUP } from "../constants/timerConstants";

export const timerReducer = (
    state = {},
    action
) => {
    switch (action.type){
        case TIMER_SETUP:
            return {data: action.payload}
        default:
            return state   
    }
}