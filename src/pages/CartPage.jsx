import React, { Component } from "react";
import { connect } from "react-redux";
import { Elements, StripeProvider } from "react-stripe-elements";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { updateCart } from "../actions/cartAction";
import RemoveFromCart from "../components/RemoveFromCart";
import Stripe from "../components/Stripe";

// import CheckoutForm from "../components/CheckoutForm";

class CartPage extends Component {
  itemRemovedFromCart = items => {
    this.props.updateCart(items);
  };

  render() {
    const data = this.props.products;
    if (!data) {
      return <h1>no items in cart</h1>;
    }
    const totalCart = data.reduce((a, b) => {
      return a + parseFloat(b.price);
    }, 0);

    // console.log(totalCart);

    return (
      <StripeProvider
        apiKey="	
    pk_test_rUJstJZFyU6dqDejrAXPdZ7I00a5ztU78b"
      >
        <div>
          {data
            ? data.map((product, index) => {
                return (
                  <Container key={index}>
                    <Row>
                      <Col sm={8}>
                        <div key={index} className="products-on-cart">
                          <h1>title: {product.title}</h1>
                          {/* <p>id: {product._id}</p> */}
                          <p>description:{product.description}</p>
                          {/* <p>${product.price}</p> */}
                        </div>
                      </Col>
                      <Col sm={4}>
                        <p>${product.price}</p>

                        <RemoveFromCart
                          product={product}
                          productIndex={index}
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
          {/* trying to pass props with link */}
          <Link to="/payment">
            <Button>Checkout</Button>
          </Link>
          <hr />
          <hr />
          <hr />
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <Stripe cartData={data} cartTotal={totalCart} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.cart.products
  };
};

const mapDispatchProps = {
  updateCart
};

export default connect(mapStateToProps, mapDispatchProps)(CartPage);

// we have one central dispatch for redux to update the global state, UPDATE_CART

// no localstorage in the reducer, we'll do anything to do with localstorage in the compoenent itself
