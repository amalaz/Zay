import React from "react";
import { BrowserRouter } from "react-router-dom";

import ZayShop from "./ZayShop";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <BrowserRouter>
      <ZayShop />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
