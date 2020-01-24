import React, { Component } from "react";
import RemoveFromCart from "../Components/RemoveFromCart";
import { connect } from "react-redux";
import { removeItem } from "../actions/cartAction";

class CartPage extends Component {
  itemRemovedFromCart = item => {
    this.props.removeItem(item);
  };

  render() {
    const data = this.props.products;
    return data
      ? data.map((product, index) => {
          return (
            <div key={index} className="products-on-cart">
              <h1>titile : {product.title}</h1>
              <p>id: {product._id}</p>
              <p>description:{product.description}</p>
              <p>${product.price}</p>
              <RemoveFromCart
                product={product}
                itemRemovedFromCart={this.itemRemovedFromCart}
              />
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
