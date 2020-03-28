import { combineReducers } from 'redux';
import { toDosReducer } from "./toDosReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
    toDosReducer,
    userReducer,
    });

export default reducers;