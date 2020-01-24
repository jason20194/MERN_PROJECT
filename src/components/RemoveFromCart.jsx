import React, { Component } from "react";
// import items from "../data/items";

class RemoveFromCart extends Component {
  // state = items;

  // componentDidMount() {
  //   this.props.addInitialCart(this.state);
  //   // console.log(this.props.product);
  // }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <button
        style={{
          padding: "20px",
          color: "red"
        }}
        onClick={() => this.props.itemRemovedFromCart(this.props.product)}
      >
        Remove from cart
      </button>
    );
  }
}

export default RemoveFromCart;
