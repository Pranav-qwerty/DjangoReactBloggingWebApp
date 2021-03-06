import React from "react";

function Services({ isServicesPage }) {
  const show_services_half = function () {
    if (isServicesPage) {
      return <div></div>;
    } else {
      return (
        <div class="container">
          <div class="creative_taital">
            <h1 class="creative_text">Creative Content Writing Services</h1>
            <p style={{ color: "#050000", textAlign: "center" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancIt is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infanc
            </p>
            <div class="btn_main">
              <button type="button" class="btn btn-dark btn-lg">
                Get started
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <div class="services_main">
        {show_services_half()}
        <div class="section_service_2">
          <h1 class="service_text">Our Service</h1>
        </div>
        <div class="service_main">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="written_text">
                  <div class="like_icon">
                    <img src="/static/images/like-icon.png" />
                  </div>
                  <h1 class="written_text">Written with Love</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text,{" "}
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="written_text">
                  <div class="like_icon">
                    <img src="/static/images/fast-forword-icon.png" />
                  </div>
                  <h1 class="written_text">Fast Turnaround</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text,{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="service_main">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="written_text">
                  <div class="like_icon">
                    <img src="/static/images/design-icon.png" />
                  </div>
                  <h1 class="written_text">Up to Date</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text,{" "}
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="written_text">
                  <div class="like_icon">
                    <img src="/static/images/writing-icon.png" />
                  </div>
                  <h1 class="written_text">Premium Content</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text,{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
