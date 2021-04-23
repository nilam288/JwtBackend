import {combineReducers} from 'redux';
import errorReducer from './ErrorReducer';
import MenReducer from './MenReducer';

export default combineReducers({

    error:errorReducer,
    Mens:MenReducer
});