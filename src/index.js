import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

var myInterceptor = axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
    //Trzeba dodawać returna requesta, ponieważ inaczej blokujesz requesta
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
axios.interceptors.request.eject(myInterceptor);

var mySecondInterceptor = axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
    //Trzeba dodawać returna requesta, ponieważ inaczej blokujesz requesta
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.eject(mySecondInterceptor);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
