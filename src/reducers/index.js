import {combineReducers} from 'redux';
import LoginReducer from "./LoginReducer";
import Listreducer from "./Listreducer"

export default combineReducers({
    isLogin: LoginReducer,
    list: Listreducer
})
