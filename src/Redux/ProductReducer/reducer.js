import { PROD_FAILURE, PROD_RQUEST, PROD_SUCCESS } from "./actionTypes"


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    singlProduct  : {},
    cart : []
}


export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case PROD_RQUEST: {
            return { ...state, isLoading: true }
        }

        case PROD_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        case PROD_SUCCESS: {
            return { ...state, isLoading: false, isError: false, products: payload }

        }
    
        default:
           return state
    }
}