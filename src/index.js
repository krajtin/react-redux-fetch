import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Ventana from "./Ventana";

// Configuring Redux Store
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <main>
        <Ventana />
      </main>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
