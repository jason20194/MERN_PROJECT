import React, { Component } from "react";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

import { Elements, StripeProvider } from "react-stripe-elements";

import Stripe from "./Stripe";

export class PaymentForm extends Component {
  render() {
    const data = this.props.products;
    if (!data) {
      return <h1>no items in cart</h1>;
    }
    const totalCart = data.reduce((a, b) => {
      return a + parseFloat(b.price);
    }, 0);
    return (
      <StripeProvider
        apiKey="
      pk_test_rUJstJZFyU6dqDejrAXPdZ7I00a5ztU78b"
      >
        <div>
          <h1>Payment</h1>
          <h3>Total = {totalCart}</h3>
          <Elements>
            <Stripe cartData={data} cartTotal={totalCart} />
          </Elements>
        </div>
      </StripeProvider>
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
