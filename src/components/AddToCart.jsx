import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/cartAction";
// import items from "../data/items";

class AddToCart extends Component {
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
          color: "green"
        }}
        onClick={() => this.props.addItem(this.props.product)}
      >
        Add to cart
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
  addItem
};

export default connect(mapStateToProps, mapDispatchProps)(AddToCart);
