import axios from 'axios';
import {GET_ERRORS,GET_MENS,GET_MEN,DELETE_MENS} from './types';

export const createMens=(Men,history)=>async dispatch=>{
    try{
    const res=await axios.post("https://jsonplaceholder.typicode.com/posts",Men);
    history.push("/MenCompo");
    }catch(error){
    dispatch({
    type:GET_ERRORS,
    payload:error.response.data
    });
    }
    };
    
    export const getMens=()=>async dispatch=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    dispatch({
    type:GET_MENS,
    payload:res.data
    });
    };

  
    
    export const getMen = (id,history)=>async dispatch=>{
    const res= await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
    dispatch({
    type:GET_MEN,
    payload:res.data
    });
    };
    
    
    export const deleteMen = id=>async dispatch=>{
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/1`);
    dispatch({
    type:DELETE_MENS,
    payload:id
    });
    };
    
    
    
    