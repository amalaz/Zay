import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import MainNav from "../common/navs/MainNav";
import Brands from "../Brands/Brands";
import Footer from "../common/footer/Footer";
const MainLayout = (props) => {
  const { pathname } = props.location;
  return (
    <Fragment>
      <MainNav />
      <div>{props.children}</div>
      {pathname === "/" && "/About" ? <Brands /> : null}
      <Footer />
    </Fragment>
  );
};
export default withRouter(MainLayout);
