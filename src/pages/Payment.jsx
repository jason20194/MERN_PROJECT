import React, { Component } from "react";
import PaymentForm from "../Components/PaymentForm";
import { connect } from "react-redux";

// import { Elements, StripeProvider } from "react-stripe-elements";

// import CheckoutForm from "../Components/CheckoutForm";

class Payment extends Component {
  render() {
    // let totalCart = 0;
    return <PaymentForm />;
  }
}

const mapStateToProps = state => {
  console.log("in payment page");
  return {
    products: state.cart.products
  };
};

export default connect(mapStateToProps)(Payment);
