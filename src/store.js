import {createStore,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState={};
const middleware=[thunk];

let store;
if(window.navigator.userAgent.includes('chrome')){
    store =createStore(
        rootReducer,
        compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__ ()));
    }
    else{
        store=createStore(
            rootReducer,
            compose(applyMiddleware(...middleware)))
    }
export default store
