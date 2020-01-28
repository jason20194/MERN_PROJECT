import React, { Component } from "react";
import { connect } from "react-redux";
import { Elements, StripeProvider } from "react-stripe-elements";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { removeItem } from "../actions/cartAction";
import RemoveFromCart from "../Components/RemoveFromCart";
import CheckoutForm from "../Components/CheckoutForm";

class CartPage extends Component {
  itemRemovedFromCart = item => {
    this.props.removeItem(item);
  };
  render() {
    const data = this.props.products;
    const totalCart = data.reduce((a, b) => {
      return a + parseFloat(b.price);
    }, 0);

    console.log(totalCart);

    return (
      <StripeProvider
        apiKey="	
pk_test_rUJstJZFyU6dqDejrAXPdZ7I00a5ztU78b"
      >
        <div>
          {data
            ? data.map((product, index) => {
                return (
                  <Container>
                    <Row>
                      <Col sm={8}>
                        <div key={index} className="products-on-cart">
                          <h1>titile : {product.title}</h1>
                          {/* <p>id: {product._id}</p> */}
                          <p>description:{product.description}</p>
                          {/* <p>${product.price}</p> */}
                        </div>
                      </Col>
                      <Col sm={4}>
                        <p>${product.price}</p>

                        <RemoveFromCart
                          product={product}
                          itemRemovedFromCart={this.itemRemovedFromCart}
                        />
                      </Col>
                    </Row>
                    <hr />
                  </Container>
                );
              })
            : null}
          <Container>
            <Row>
              <Col sm={8}>CHECKOUT</Col>
              <Col sm={4}>Total Cart Value = {totalCart}</Col>
            </Row>
          </Container>
          <hr />
          <hr />
          <hr />
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm totalCart={totalCart} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    // its stored in cart because we have used cart in combine reducers function in reducers index
    products: state.cart.products
  };
};

const mapDispatchProps = {
  removeItem
};

export default connect(mapStateToProps, mapDispatchProps)(CartPage);
