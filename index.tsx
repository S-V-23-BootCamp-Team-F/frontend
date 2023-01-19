import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "../frontend/src/App";

axios.defaults.baseURL = "https://www.abc.com";
axios.defaults.withCredentials = true;
