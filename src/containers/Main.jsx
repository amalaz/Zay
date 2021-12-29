import React, { Fragment } from "react";

import Categories from "../components/Main/Categories/Categories";
import FeaturedProduct from "../components/Main/FeaturedProduct/FeaturedProduct";
import TopBanner from "../components/Main/TopBanner/TopBanner";

const Main = () => {
  return (
    <Fragment>
      <TopBanner />
      <Categories />

      <FeaturedProduct />
    </Fragment>
  );
};
export default Main;
