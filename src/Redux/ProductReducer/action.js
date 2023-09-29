import axios from "axios"
import { PROD_FAILURE, PROD_RQUEST, PROD_SUCCESS } from "./actionTypes"



export const getProData = (dispatch) => {

    dispatch({type: PROD_RQUEST})

axios.get(`https://dressify-mock-server.onrender.com/products`).then((res) => {
    //  console.log(res.data)
     dispatch({type : PROD_SUCCESS, payload : res.data})
}).catch(() => {
    dispatch({type: PROD_FAILURE})
})

}