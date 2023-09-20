import React, { Component } from "react";
export class MyNav extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-8">
              <ul className="navbar-nav col-12">
                <li className="nav-item col-1">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item col-1">
                  <a className="nav-link" href="#Products">
                    Products
                  </a>
                </li>
                <li className="nav-item col-1">
                  <a className="nav-link" href="#ContactUs">
                    Contact
                  </a>
                </li>
                <li className="nav-item col-1">
                  <a className="nav-link " href="#AboutUs">
                    About
                  </a>
                </li>
                  <li className="nav-item col-8">
                  <a className="nav-link" href="#">
                    <img className="nav_img"
                      src="./images/logo-dark.png"
                      alt=""
                      srcset=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>{" "}
      </>
    );
  }
}
