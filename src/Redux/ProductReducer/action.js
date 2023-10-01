import axios from "axios"
import { POST_PRODUCT_SUCCESS, PROD_FAILURE, PROD_RQUEST, PROD_SUCCESS } from "./actionTypes"



export const getProData = (paramObj) =>  (dispatch) => {

    dispatch({type: PROD_RQUEST})

axios.get(`https://dressify-server-project.onrender.com/products`, paramObj).then((res) => {
    //  console.log(res.data)
     dispatch({type : PROD_SUCCESS, payload : res.data})
}).catch(() => {
    dispatch({type: PROD_FAILURE})
})

}

// POSTING PRODUCTS final:  https://dressify-server-project.onrender.com/products

export const postProduct =(newProduct)=> (dispatch)=> {

    axios.post(`https://dressify-server-project.onrender.com/products`, newProduct)
    .then(function(res){
        dispatch({type: POST_PRODUCT_SUCCESS, payload: res.data});
    })
    .catch(function(){
        // dispatch({type: PROD_FAILURE})
        console.log('post error');
    })
}
