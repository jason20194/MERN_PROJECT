import React, { Component } from "react";
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
        <div className="card-container">
          <div class="card2">
            <div>
              <div>
                <h1 className="contact-form-header">Payment</h1>
              </div>
              <hr className="payment-line"></hr>
              <br></br>

              <div>
                <h3 className="contact-form-header">Total = ${totalCart}HKD</h3>
              </div>

              <br></br>
              <Elements>
                <Stripe cartData={data} cartTotal={totalCart} />
              </Elements>
            </div>
          </div>
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
