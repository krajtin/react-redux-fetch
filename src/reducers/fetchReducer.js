// Action Types
import { VER_DATOS_FETCH } from "../acciones/actionTypes";

// Initial State
const initialState = {
  datos: []
};

export default function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case VER_DATOS_FETCH: {
      //El reducer es necesario crear json vacio, estado, y la propiedad a cambiar
      /*return {
        ...state,
        nombre: nombre + "hola mundo"
      };
      */
      return Object.assign({}, state, { datos: action.datos });
    }
    default: {
      return state;
    }
  }
}
