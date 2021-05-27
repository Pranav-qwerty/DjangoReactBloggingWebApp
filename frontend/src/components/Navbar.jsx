import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div class="header_main">
        <div class="container">
          <div class="logo">
            <a href="/">
              <img src="/static/images/logo.png" />
            </a>
          </div>
        </div>
      </div>
      <div class="header">
        <div class="container">
          <div class="col-sm-12">
            <div class="menu-area">
              <nav class="navbar navbar-expand-lg ">
                <button
                  class="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fa fa-bars"></i>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <Link to="/">
                        <a class="nav-link">
                          HOME<span class="sr-only">(current)</span>
                        </a>{" "}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about">
                        <a class="nav-link">ABOUT</a>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/service">
                        <a class="nav-link" href="/service">
                          SERVICES
                        </a>
                      </Link>
                    </li>
                    <li class="#" href="#">
                      <Link to="/blog">
                        <a class="nav-link" href="/blog">
                          BLOG
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item" href="#">
                      <Link to="/contact">
                        <a class="nav-link" href="/contact">
                          CONTACT
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item" href="#">
                      <Link to="/create">
                        <a class="nav-link" href="/create">
                          CREATE BLOG
                        </a>
                      </Link>
                    </li>
                    <li class="last">
                      <Link to="/search">
                        <img src="/static/images/search-icon.png" alt="icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
