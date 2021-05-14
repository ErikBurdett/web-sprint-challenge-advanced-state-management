import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware  } from "redux";
// import logger from "redux-logger"; // couldn't get logger to work?
//still can't find why logger is breaking?
import thunk from "redux-thunk";
import rootReducer from "./reducers/";

const store = createStore(rootReducer, applyMiddleware(thunk));
const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store ={store}>
        <App/>
    </Provider>,
    rootElement
);

