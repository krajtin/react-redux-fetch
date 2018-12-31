import { VER_DATOS_FETCH } from "./actionTypes";

/**
 * datos_fetch
 * @param {Array JSON} datos Contiene datos en JSON
 */
const datos_fetch = datos => {
  return {
    type: VER_DATOS_FETCH,
    datos: datos
  };
};
const get_datos_fetch_json = (
  url = "https://api.coinmarketcap.com/v1/ticker/"
) => dispatch => {
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      //Invocamos la accion al redux para que guarde la informacion en state
      //Enviandole los datos obtenidos del objeto fetch en Array[JSON]
      dispatch(datos_fetch(res));
    });
};

export { get_datos_fetch_json };
