import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const app = (
<React.StrictMode>
  <App />
</React.StrictMode>)

if(process.env.NODE_ENV !== 'production'){
  import('@axe-core/react').then(axe=>{
    axe.default(React,ReactDOM,1000,{})
    ReactDOM.render(app,document.getElementById("root"));
  })
} else{

ReactDOM.render(app,document.getElementById("root"));}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();