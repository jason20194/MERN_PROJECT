import React, { Component } from "react";
import RemoveFromCart from "../Components/RemoveFromCart";
import { connect } from "react-redux";
import { removeItem } from "../actions/cartAction";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class CartPage extends Component {
  itemRemovedFromCart = item => {
    this.props.removeItem(item);
  };
  render() {
    const data = this.props.products;
    const totalCart = data.reduce((a, b) => {
      return parseFloat(a.price) + parseFloat(b.price);
    });
    return data
      ? data.map((product, index) => {
          return (
            <div>
              <Container>
                <Row>
                  <Col sm={8}>
                    <div key={index} className="products-on-cart">
                      <h1>titile : {product.title}</h1>
                      <p>id: {product._id}</p>
                      <p>description:{product.description}</p>
                      <p>${product.price}</p>
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
              </Container>
              {/* <Container>
                <Row>
                  <Col sm={8}>CHECKOUT</Col>
                  <Col sm={4}>Total Cart Value = {totalCart}</Col>
                </Row>
              </Container> */}
            </div>
          );
        })
      : null;
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

// <Container>
//   <Row>
//     <Col>1 of 2</Col>
//     <Col>2 of 2</Col>
//   </Row>
//   <Row>
//     <Col>1 of 3</Col>
//     <Col>2 of 3</Col>
//     <Col>3 of 3</Col>
//   </Row>
// </Container>;
