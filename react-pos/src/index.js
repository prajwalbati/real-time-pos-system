import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import { makeRoutes } from "./routes";
import App from "./App";

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
