// Dependencies
import { combineReducers } from "redux";

// Shared Reducers
import fetch_datos from "./fetchReducer";

const rootReducer = combineReducers({
  fetch_datos
});

export default rootReducer;
