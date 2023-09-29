import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./ProductReducer/reducer";

 const middleware=[thunk]
const rootReducer = combineReducers({
    ProductReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware));


//  api
//   https://dressify-mock-server.onrender.com/products