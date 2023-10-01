import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT, SIGN_UP_SUCCESS } from "./actionType"

const initialState = {
    credentials: [],
    isAuth: false,
    username: "",
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, action)=> {

    switch(action.type){
        case LOGIN_REQUEST:
            return {...state, isLoading: true}

        case SIGN_UP_SUCCESS:
            return {...state, isLoading: false, credentials: [...state.credentials, action.payload]}  
            
        case LOGIN_FAILURE:
            return {...state, isLoading: false, isError: true}   
            
        case LOGIN_SUCCESS:
            return {...state, isAuth: true, username: action.payload}

        case LOG_OUT:
            return {...state, isAuth: false, username:""}    

        default:
            return state    
    }
}