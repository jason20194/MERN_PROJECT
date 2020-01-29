import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
const axios = require("axios");

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    ev.preventDefault();
    const { target } = ev;
    console.log(target);

    let { token } = await this.props.stripe.createToken();

    const paymentData = this.props.cartData;

    const dataObject = {
      token: token,
      payload: paymentData
    };

    // axios request to the backend with token to process the payment
    axios
      .post("/charge", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        tokenId: token.id,
        payload: dataObject
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log("this is the error" + err));
  }
  render() {
    return (
      <div
        style={{
          color: "black",
          width: "500px"
        }}
      >
        <form onSubmit={this.submit}>
          <p>Would you like to complete the purchase?</p>

          <input type="text" name="name" placeholder="Card Holder's Name" />

          <input type="text" name="address" placeholder="Delivery address" />

          <CardElement />
          <button type="submit">Pay</button>
        </form>
        {/* <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button> */}
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
