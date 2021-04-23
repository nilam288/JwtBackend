import {GET_ERRORS,GET_MENS,GET_MEN,DELETE_MEN} from '../action/types';

const initialState={

    Mens:[],
    Men:{}
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_MENS:
        return {
            ...state,
            Mens:action.payload
        };

         case GET_MEN:
        return {
            ...state,
            Men:action.payload
        };

        default:
        return state;
    }

    }
