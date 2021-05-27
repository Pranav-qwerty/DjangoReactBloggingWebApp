import React from "react";

function Contact() {
  return (
    <div>
      <div class="contact_main">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="touch_text">Contact Us</h1>
            </div>
          </div>
        </div>
        <div class="contact_section_2">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="map_icon">
                  <img
                    src="/static/images/map-icon.png"
                    style={{ maxWidth: "100%", paddingLeft: "30px" }}
                  />
                  <p class="email-text">
                    <a href="#">
                      Gb road 123 londo
                      <br />
                      Uk
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="map_icon">
                  <img
                    src="/static/images/call-icon.png"
                    style={{ maxWidth: "100%", paddingLeft: "30px" }}
                  />
                  <p class="email-text">
                    <a href="#">+7123654897</a>
                  </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="map_icon">
                  <img
                    src="/static/images/email-icon.png"
                    style={{ maxWidth: "100%", paddingLeft: "30px" }}
                  />
                  <p class="email-text">
                    <a href="#">demo@gmail.com</a>
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

export default Contact;
