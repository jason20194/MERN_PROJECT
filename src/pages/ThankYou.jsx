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
  // comment

  render() {
    return (
      <div>
        <h1>Hello from Thank You page</h1>
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
