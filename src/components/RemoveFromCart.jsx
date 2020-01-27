import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class RemoveFromCart extends Component {
  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <Button
        style={{
          margin: "5px",
          background: "red"
        }}
        onClick={() => this.props.itemRemovedFromCart(this.props.product)}
      >
        Remove from cart
      </Button>
    );
  }
}

export default RemoveFromCart;
