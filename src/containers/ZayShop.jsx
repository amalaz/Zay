import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./Main";
import MainLayout from "../components/Layouts/MainLayout";
import About from "../components/About/About";
import Contact from "../components/Contact/Contect";
import Shop from "../components/Shop/Shop";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
const ZayShop = (props) => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>
    </MainLayout>
  );
};
export default ZayShop;
