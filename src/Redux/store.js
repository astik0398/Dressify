import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import {reducer as authReducer} from './AuthReducer/reducer'

 const middleware=[thunk]
const rootReducer = combineReducers({
    ProductReducer,
    authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware));


//  api
//   https://dressify-mock-server-final.onrender.com/products