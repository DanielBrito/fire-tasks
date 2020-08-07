import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";

import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position="bottom-center"
      autoClose={4000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      style={{ width: "290px" }}
    />
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
