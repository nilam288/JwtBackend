import {GET_FOOTWARES,GET_FOOTWARE,DELETE_FOOTWARE} from'./../action/types';

const initialState={

    footwares:[],
    footware:{}
};
export default function(state=initialState,action){
    console.log("reducer..................."+JSON.stringify(action));
    switch(action.type){
        case GET_FOOTWARES:
        return {
            ...state,  
            footwares:action.payload
        };

         case GET_FOOTWARE:
        return {
            ...state,
            footware:action.payload
        };

        default:
        return state;
    }

    }
