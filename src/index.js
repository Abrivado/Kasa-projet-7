import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
  <BrowserRouter>
    <div className="index__template">
      <Header />
      <div className="index__content">
        <AppRoutes />
      </div>
      <div className="index__footer">
        <Footer />
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
