import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get_datos_fetch_json } from "./acciones/baseActions";

const Ventana = class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { get_datos_fetch_json } = this.props;
    get_datos_fetch_json();
  }

  render() {
    const { datos } = this.props.fetch_datos;

    return (
      <ul>
        {datos.map((e, index) => {
          return <li key={index}>{e.id}</li>;
        })}
      </ul>
    );
  }
};
const mapStateToProps = state => {
  return {
    fetch_datos: state.fetch_datos // Datos del state en redux
  };
};

// Binding  action.
//Gracias a bindActionCreators podremos invocar el metodo dispatch dentro de las acciones que hemos creado
// como por ejemplo en get_datos_fetch_json
//
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      get_datos_fetch_json
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ventana);
