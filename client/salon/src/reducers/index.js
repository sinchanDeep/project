import checkUserLogin from './printData';
import {combineReducers} from 'redux';

//putting all the reducers inside rootReducers to store it as a single reducer in store js
const rootReducer= combineReducers({
    checkUserLogin
});

export default rootReducer;