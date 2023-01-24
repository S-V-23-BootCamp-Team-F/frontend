import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "../frontend/src/App";

axios.defaults.baseURL = "http://18.179.229.39/api/v1/";
axios.defaults.withCredentials = true;
