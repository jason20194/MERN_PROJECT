import React, { Component } from "react";
import PaymentForm from "../Components/PaymentForm";
import { connect } from "react-redux";

class Payment extends Component {
  render() {
    console.log(this.props);

    // let totalCart = 0;
    return <PaymentForm />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.cart.products
  };
};

export default connect(mapStateToProps)(Payment);
