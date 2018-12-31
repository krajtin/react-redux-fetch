import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Root Reducer
import rootReducer from "../reducers";

//Redux-thunk nos permite Acciones Asíncronas
export default function configureStore(initialState) {
  const middleware = [thunk];

  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
