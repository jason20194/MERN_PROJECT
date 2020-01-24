import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions/cartAction";
// import items from "../data/items";

class RemoveFromCart extends Component {
  // state = items;

  // componentDidMount() {
  //   this.props.addInitialCart(this.state);
  //   // console.log(this.props.product);
  // }

  render() {
    return (
      <button
        style={{
          padding: "20px",
          color: "red"
        }}
        onClick={() => this.props.removeItem(this.props.product)}
      >
        Remove from cart
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {
    // its stored in cart because we have used cart in combine reducers function in reducers index
    products: state.cart
  };
};

const mapDispatchProps = {
  removeItem
};

export default connect(mapStateToProps, mapDispatchProps)(RemoveFromCart);
