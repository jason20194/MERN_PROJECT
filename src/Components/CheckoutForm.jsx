import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
const axios = require("axios");

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    ev.preventDefault();
    const { currentTarget } = ev;
    const fD = new FormData(currentTarget);

    console.log(fD);

    console.log(currentTarget);

    const cardInfo = {
      name: fD.get("Delivery address")
    };

    console.log(cardInfo);

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
    const fieldStyle = {
      height: "50px",
      background: ""
    };
    return (
      <div>
        <Form
          onSubmit={this.submit}
          style={{
            width: "70%"
          }}
        >
          <Row>
            <Col>
              <Form.Control
                style={fieldStyle}
                placeholder="Card Holder's Name"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control style={fieldStyle} placeholder="Delivery address" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control style={fieldStyle} placeholder="email address" />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardElement />
              <button type="submit">Pay</button>
            </Col>
          </Row>
        </Form>

        {/* <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button> */}
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
