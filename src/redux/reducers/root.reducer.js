import { applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import popularReducer from "./popular.reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

 const rootReducer = combineReducers({
    popularReducer
}, applyMiddleware(logger,thunk))

export default rootReducer