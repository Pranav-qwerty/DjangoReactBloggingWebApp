import React from "react";

function Banner() {
  return (
    <div>
      <div class="banner-main">
        <div class="container">
          <div id="main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="titlepage-h1">
                  <h1 class="bnner_title">
                    Welcome To
                    <br />
                    <span style={{ color: "#10b5fa" }}>
                      Content Writing Services
                    </span>
                  </h1>
                  <p class="long_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                </div>
                <div class="btn_main">
                  <button type="button" class="btn btn-dark btn-lg">
                    <a href="contact.html">Contact</a>
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <div class="titlepage-h1">
                  <h1 class="bnner_title">
                    Welcome To
                    <br />
                    <span style={{ color: "#10b5fa" }}>
                      Content Writing Services
                    </span>
                  </h1>
                  <p class="long_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                </div>
                <div class="btn_main">
                  <button type="button" class="btn btn-dark btn-lg">
                    Contact
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <div class="titlepage-h1">
                  <h1 class="bnner_title">
                    Welcome To
                    <br />
                    <span style={{ color: "#10b5fa" }}>
                      Content Writing Services
                    </span>
                  </h1>
                  <p class="long_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                </div>
                <div class="btn_main">
                  <button type="button" class="btn btn-dark btn-lg">
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
