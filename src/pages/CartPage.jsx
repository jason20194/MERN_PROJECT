import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { updateCart } from "../actions/cartAction";
import RemoveFromCart from "../components/RemoveFromCart";

// import CheckoutForm from "../components/CheckoutForm";

class CartPage extends Component {
  itemRemovedFromCart = items => {
    this.props.updateCart(items);
  };

  render() {
    const data = this.props.products;
    if (!data) {
      return <h1>No items in cart</h1>;
    }
    const totalCart = data.reduce((a, b) => {
      return a + parseFloat(b.price);
    }, 0);

    // console.log(totalCart);

    return (
      <div className="container">
        <div className="text-center p-5">
          <h1 className="cart-title">CART</h1>
        </div>
        {data
          ? data.map((product, index) => {
              return (
                <Container key={index}>
                  <Row className="cart-row py-3">
                    <Col sm={8}>
                      <div key={index} className="products-on-cart">
                        <h1 className="product-title2">{product.title}</h1>
                        {/* <p>id: {product._id}</p> */}
                        <p className="product-description2">
                          {product.description}
                        </p>
                        {/* <p>${product.price}</p> */}
                        <RemoveFromCart
                          product={product}
                          productIndex={index}
                          itemRemovedFromCart={this.itemRemovedFromCart}
                        />
                      </div>
                    </Col>
                    <Col sm={4}>
                      <p className="product-font2 text-right">
                        ${product.price}
                      </p>
                    </Col>
                  </Row>
                  {/* <hr /> */}
                </Container>
              );
            })
          : null}
        <Container>
          <Row className="product-font3 py-3">
            <Col sm={8}>
              {totalCart ? (
                <Link to="/payment">
                  <Button className="checkout-button">Checkout</Button>
                </Link>
              ) : null}
            </Col>

            <Col sm={4} className="product-font4 text-right">
              Total Cart Value = ${totalCart}
            </Col>
          </Row>
        </Container>
      </div>
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
