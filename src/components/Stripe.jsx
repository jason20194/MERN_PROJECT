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

    const customerInfo = {
      name: fD.get("name"),
      address: fD.get("address"),
      email: fD.get("email")
    };

    let { token } = await this.props.stripe.createToken();

    const itemsInCart = this.props.cartData;

    const cartTotal = this.props.cartTotal;

    this.setState({ paid: true });

    // axios request to the backend with token to process the payment
    axios
      .post("/charge", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        tokenId: token.id,
        orderData: { itemsInCart, customerInfo, cartTotal }
      })
      .then(response => {
        localStorage.removeItem("products");
        this.redirect();
      })
      .catch(err => console.log("this is the error" + err));
  }

  redirect = () => {
    console.log("redirect called", this.props);
    this.props.history.push("/thank_you");
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
            required
          />

          <input
            style={fieldStyle}
            type="text"
            name="address"
            placeholder="Delivery address"
            required
          />

          <input
            style={fieldStyle}
            type="text"
            name="email"
            placeholder="Email address"
            required
          />

          <CardElement />
          <br></br>
          <button type="submit">Pay</button>
        </form>
      </div>
    );
  }
}

export default withRouter(injectStripe(Stripe));

// export default injectStripe(Stripe);
