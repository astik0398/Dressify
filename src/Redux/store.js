import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

 const middleware=[thunk]
const rootReducer = combineReducers({
 
});

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware));