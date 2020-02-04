import React, { Component } from "react";
import "../components/FlexboxTest.css";
import Card from "react-bootstrap/Card";

class AboutUs extends Component {
  render() {
    return (
      <div className="main-body">
        <div className="left-side"></div>
        <div className="right-side">
          <div className="product-box">
            <h1>This is the product</h1>
            <p>a little bit about the product</p>
          </div>
          <div className="description-box">
            <h1>This is the description</h1>
            <p>a little bit about the description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
