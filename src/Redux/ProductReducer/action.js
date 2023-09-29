import axios from "axios"
import { PROD_FAILURE, PROD_RQUEST, PROD_SUCCESS, SINGLE_PROD_SUCCSS } from "./actionTypes"



export const getProData = (paramObj) =>  (dispatch) => {

    dispatch({type: PROD_RQUEST})

axios.get(`https://dressify-server-project.onrender.com/products`, paramObj).then((res) => {
    //  console.log(res.data)
     dispatch({type : PROD_SUCCESS, payload : res.data})
}).catch(() => {
    dispatch({type: PROD_FAILURE})
})

}



