import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Logout from "./Logout";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            id="brand-image"
            alt="Website Logo"
            src={require("../images/medicinepower.png")}
          />
        </a>
        <a className="navbar-brand">Medicine Power</a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto nav-fill w-100">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/all_products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about_us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i class="fa fa-shopping-cart">
                  <span class="badge badge-light">1</span>
                </i>
              </a>
            </li>
            <li className="nav-item">
              <Logout />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
