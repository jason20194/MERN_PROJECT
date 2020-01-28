import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({
      name: "NameMurtaza",
      addres: "11 hermione terrace"
    });

    console.log(this.props);

    console.log(token);

    // let response = await fetch("/charge", {
    //   method: "POST",
    //   headers: { "Content-Type": "text/plain" },
    //   body: token.id
    // });

    // if (response.ok) console.log("Purchase Complete!");
  }
  render() {
    console.log(this.props);

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
