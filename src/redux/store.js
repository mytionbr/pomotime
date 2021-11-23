import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import TimerController from '../utils/TimerController';
import { timerReducer } from './reducers/timerReducers';

const pomotimer = new TimerController();

const setup = ()=>{
    if(localStorage.getItem('pomotimerInfo')){
        return JSON.parse(localStorage.getItem('pomotimerInfo'));
    } else {
        localStorage.setItem("pomotimerInfo", JSON.stringify(pomotimer));
        return pomotimer;
    }
}

const initialState = {
    pomotimerInfo: setup()
}

const reducer = combineReducers({
    pomotimer: timerReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store