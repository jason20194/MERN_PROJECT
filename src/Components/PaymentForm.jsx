import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

import { Elements, StripeProvider } from "react-stripe-elements";

import CheckoutForm from "../Components/CheckoutForm";

export class PaymentForm extends Component {
  render() {
    return (
      <div></div>
      //   <StripeProvider
      //     apiKey="
      // pk_test_rUJstJZFyU6dqDejrAXPdZ7I00a5ztU78b"
      //   >
      //     <h1>React Stripe Elements Example</h1>
      //     <Elements>
      //       <CheckoutForm cartData={data} cartTotal={totalCart} />
      //     </Elements>
      //   </StripeProvider>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.cart.products
  };
};

export default connect(mapStateToProps)(PaymentForm);
