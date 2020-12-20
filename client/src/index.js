import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
  faGoogle,
  faReact,
  faPython,
  faJava,
  faJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faAngleUp,
  faAngleDown,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import App from "./screens/App";
import * as serviceWorker from "./serviceWorker";

library.add(
  faGithub,
  faInstagramSquare,
  faLinkedin,
  faEnvelope,
  faAngleUp,
  faAngleDown,
  faCircle,
  faGoogle,
  faReact,
  faPython,
  faJava,
  faJs,
  faGit
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
