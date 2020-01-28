import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
const axios = require("axios");

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    console.log(ev);

    let { token } = await this.props.stripe.createToken(this.props.cartData);

    const paymentData = this.props.cartData;

    // console.log(paymentData);
    // console.log(token);

    const dataObject = {
      token: token,
      payload: paymentData
    };

    axios
      .post("/charge", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        tokenId: token.id,
        payload: dataObject
      })
      .then(response => {
        console.log(response.data);

        // const parsedData = JSON.parse(response.config.data);
        // console.log(parsedData);
        // props.history.push("/");
      })
      .catch(err => console.log("this is the error" + err));
  }
  render() {
    // console.log(this.props);

    return (
      <div
        style={{
          color: "black",
          width: "500px"
        }}
      >
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
