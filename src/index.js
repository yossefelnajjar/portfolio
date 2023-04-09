import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import CvBtn from "./components/CvBtn";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
    <CvBtn />
      <AnimatedRoutes />
    </BrowserRouter>
  </>
);
