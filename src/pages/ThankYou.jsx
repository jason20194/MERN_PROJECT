import React, { Component } from "react";
import axios from "axios";

class ThankYou extends Component {
  componentDidMount = () => {
    let cart = JSON.parse(localStorage.getItem("products"));
    if (!cart) {
      cart = [];
    }
    localStorage.setItem("products", JSON.stringify(cart));
    this.props.updateCart(cart);
  };

  render() {
    return (
      <div className="thank-you">
        <h1>THANK YOU</h1>
        <p>Thanks for your purchase! We look forward to serving you again!</p>
      </div>
    );
  }
}

export default ThankYou;
