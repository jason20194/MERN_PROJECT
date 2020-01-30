import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class RemoveFromCart extends Component {

  // () => this.props.itemRemovedFromCart(this.props.product)

  updateLocalStorageAndDispatch = (e) => {
    let cart = JSON.parse(localStorage.getItem('products'))
    if (!cart) {
      return null
    }
    cart = cart.filter((item, index) => {
      return index !== this.props.productIndex
    })
    localStorage.setItem('products', JSON.stringify(cart))
    // here ill dispatch
    this.props.itemRemovedFromCart(cart)
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <Button
        style={{
          margin: "5px",
          background: "red"
        }}
        onClick={this.updateLocalStorageAndDispatch}
      >
        Remove from cart
      </Button>
    );
  }
}

export default RemoveFromCart;
