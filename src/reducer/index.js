import {combineReducers} from 'redux';
import errorReducer from './ErrorReducer';
import MenReducer from './MenReducer';
import FootwareReducer from './FootwareReducer';
import { configureStore } from '@reduxjs/toolkit'


export default combineReducers({

    error:errorReducer,
    //Mens:MenReducer,
    footwares:FootwareReducer
});

 /*const store= configureStore({
    reducer,
  })

  export default store;*/