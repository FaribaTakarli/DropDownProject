import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";
//import Product from "./components/product";
// import Product from "./components/functional/product";
//import Products from "./components/products";
//import Products from "./components/functional/products";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < BrowserRouter >
    <
    App / >
    <
    /BrowserRouter>

);