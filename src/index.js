import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/Components/Nav/Nav.css";
import "../src/Components/Footer/Footer.css";
import "../src/Components/Home/Home.css";
import "../src/Components/About/About.css";
import "../src/Components/Portfolio/Portfolio.css";
import "../src/Components/PortfolioItem/PortfolioItem.css";
import "../src/Components/Contact/Contact.css";
import "../src/Components/PortfolioSoloItem/PortfolioSoloItem.css";
import "../src/Components/PageNotFound/Pagenotfound.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
