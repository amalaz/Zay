import React, { Fragment } from "react";

const TopBanner = () => {
  return (
    <Fragment>
      <div
        id="mo-zay-hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#mo-zay-hero-carousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#mo-zay-hero-carousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#mo-zay-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./img/banner_img_01.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success">
                      <b>Zay</b> eCommerce
                    </h1>
                    <h3 className="h2">Lorem ipsum dolor sit amet.</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo dolorum odio alias ullam beatae quod fugiat
                      cumque, quam deserunt a asperiores odit assumenda
                      laboriosam modi quis sapiente. Laudantium, ea. Possimus.
                      <a className="text-success" href="#" target="_blank">
                        @@@
                      </a>{" "}
                      website. Image credits go to{" "}
                      <a className="text-success" href="#" target="_blank">
                        @@@
                      </a>
                      ,
                      <a className="text-success" href="#" target="_blank">
                        @@@
                      </a>{" "}
                      and
                      <a className="text-success" href="#" target="_blank">
                        @@@
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./img/banner_img_02.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Proident occaecat</h1>
                    <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat esse vitae accusamus est eaque illum id laborum
                      ullam, deserunt suscipit cupiditate pariatur amet dolore
                      voluptates libero. Molestiae beatae eos sunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./img/banner_img_03.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Repr in voluptate</h1>
                    <h3 className="h2">Ullamco laboris nisi ut </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Vitae deserunt ipsa doloribus debitis optio ab aut
                      veritatis soluta. Culpa quis eaque ut ipsam, tempora nihil
                      ipsa vel illum iusto iure?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#mo-zay-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i className="fas fa-chevron-left"></i>
        </a>
        <a
          className="carousel-control-next text-decoration-none w-auto pe-3"
          href="#mo-zay-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </Fragment>
  );
};
export default TopBanner;
