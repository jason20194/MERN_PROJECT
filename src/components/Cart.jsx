import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, removeItem, addInitialCart } from "../actions/cartAction";
import items from "../data/items";

class Cart extends Component {
  state = items;

  componentDidMount() {
    this.props.addInitialCart(this.state);
    // console.log(this.props.product);
  }

  render() {
    return (
      <button
        style={{
          padding: "20px"
        }}
        onClick={() => this.props.addItem(this.props.product)}
      >
        Click me
      </button>
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
  addItem,
  removeItem,
  addInitialCart
};

export default connect(mapStateToProps, mapDispatchProps)(Cart);
