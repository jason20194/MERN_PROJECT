import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { withRouter } from "react-router";

const axios = require("axios");

class Stripe extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  state = {
    paid: false
  };

  async submit(ev) {
    ev.preventDefault();
    const { currentTarget } = ev;
    const fD = new FormData(currentTarget);
    // const orderId = this.props.orderId
    // console.log('stripe orderId', orderId)
    const customerInfo = {
      name: fD.get("name"),
      address: fD.get("address"),
      email: fD.get("email")
    };

    let { token } = await this.props.stripe.createToken();

    const itemsInCart = this.props.cartData;

    const cartTotal = this.props.cartTotal;

    // this.setState({ paid: true });

    // axios request to the backend with token to process the payment
    axios
      .post(`${process.env.REACT_APP_BACK_END}/charge`, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        tokenId: token.id,
        orderData: { itemsInCart, customerInfo, cartTotal }
      })
      .then(response => {
        localStorage.removeItem("products");
        console.log("inside response", this.state);

        this.redirect();
      })
      .catch(err => console.log("this is the error" + err));
  }

  redirect = () => {
    console.log("redirect called", this.props);
    // this.props.history.push("/thank_you");

    this.props.history.push({
      pathname: '/thank_you',
      state: { orderId: this.props.orderId }
    })
  };

  render() {
    const fieldStyle = {
      color: "black",
      width: "100%"
    };
    return (
      <div
        style={{
          width: "100%"
        }}
      >
        <form onSubmit={this.submit}>
          <p>Please complete the details below to complete your purchase</p>

          <input
            style={fieldStyle}
            type="text"
            name="name"
            placeholder="Card Holder's Name"
          />

          <input
            style={fieldStyle}
            type="text"
            name="address"
            placeholder="Delivery address"
          />

          <input
            style={fieldStyle}
            type="text"
            name="email"
            placeholder=" email address"
          />

          <CardElement />
          <button type="submit">Pay</button>
        </form>
      </div>
    );
  }
}

export default withRouter(injectStripe(Stripe));
