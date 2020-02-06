import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart } from "../actions/cartAction";

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

const mapStateToProps = state => {
  return {
    products: state.cart.products
  };
};

const mapDispatchProps = {
  updateCart
};

export default connect(mapStateToProps, mapDispatchProps)(ThankYou);
