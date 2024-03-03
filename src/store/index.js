import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import counterReducer from "./counter";

const combinedReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export default combinedReducer;
