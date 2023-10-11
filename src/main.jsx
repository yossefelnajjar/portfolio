import React             from "react";
import ReactDOM          from "react-dom/client";
import { Provider }      from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./style/sass/main.css";
import { store } from "./rtk/store";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
