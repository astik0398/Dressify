import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT, SIGN_UP_SUCCESS } from "./actionType"

export const signup = (details)=> (dispatch)=> {

    dispatch({type: LOGIN_REQUEST})
    axios.post('https://bright-sight.onrender.com/users', details)
    .then(function(res){
        dispatch({type: SIGN_UP_SUCCESS, payload: res.data})
    })
    .catch(function(){
        dispatch({type: LOGIN_FAILURE})
    })
}


export const login =(name)=> (dispatch)=> {
    dispatch({type: LOGIN_SUCCESS, payload: name})
}

export const logout = (dispatch)=>{
    dispatch({type: LOG_OUT})
}