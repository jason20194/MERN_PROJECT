import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart } from "../actions/cartAction";
import Button from "react-bootstrap/Button";
// import items from "../data/items";

class AddToCart extends Component {
  // state = items;

  // componentDidMount() {
  //   this.props.addInitialCart(this.state);
  //   // console.log(this.props.product);
  // }

  updateLocalStorageAndDispatch = (e) => {
    let cart = JSON.parse(localStorage.getItem('products'))
    if (!cart) {
      cart = []
    }
    cart.push(this.props.product)
    localStorage.setItem('products', JSON.stringify(cart))
    // here ill dispatch
    this.props.updateCart(cart)
  }

  render() {
    return (
      <Button
        style={{
          margin: "5px",
          background: "green"
        }}
        onClick={this.updateLocalStorageAndDispatch}
      >
        Add to cart
      </Button>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.cart);

  return {
    // its stored in cart because we have used cart in combine reducers function in reducers index
    products: state.cart
  };
};

const mapDispatchProps = {
  updateCart
};

export default connect(mapStateToProps, mapDispatchProps)(AddToCart);
