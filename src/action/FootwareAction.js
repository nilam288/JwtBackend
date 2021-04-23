import axios from 'axios';
import {GET_ERRORS,GET_FOOTWARES,GET_FOOTWARE,DELETE_FOOTWARE} from './types';

export const createProject=(product,history)=>async dispatch=>{
try{
const res=await axios.post("http://localhost:8080/SpringReact/products",product);
history.push("/Footware");
}catch(error){
dispatch({
type:GET_ERRORS,
payload:error.response.data
});
}
};

export const getFootwares=()=>async dispatch=>{
const res=await axios.get("http://localhost:8080/SpringReact/products");
dispatch({
type:GET_FOOTWARES,
payload:res.data
});
};

export const getFootware = (id,history)=>async dispatch=>{
const res= await axios.get(`http://localhost:8080/SpringReact/products/${id}`);
dispatch({
type:GET_FOOTWARE,
payload:res.data
});
};


export const deleteFootware = id=>async dispatch=>{
await axios.delete(`http://localhost:8080/SpringReact/products/${id}`);
dispatch({
type:DELETE_FOOTWARE,
payload:id
});
};



