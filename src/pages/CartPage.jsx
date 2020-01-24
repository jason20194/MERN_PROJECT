import React, { Component } from "react";
import RemoveFromCart from "../Components/RemoveFromCart";

class CartPage extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    if (localStorage.getItem("products")) {
      let products = JSON.parse(localStorage.getItem("products"));
      // console.log(products);
      this.setState({ data: products });
    }
  }

  render() {
    const { data } = this.state;
    return data
      ? data.map((product, index) => {
          return (
            <div key={index} className="products-on-cart">
              <h1>titile : {product.title}</h1>
              <p>id: {product._id}</p>
              <p>description:{product.description}</p>
              <p>${product.price}</p>
              <RemoveFromCart product={product} />
            </div>
          );
        })
      : null;
  }
}

export default CartPage;
