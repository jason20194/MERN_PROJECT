import React, { Component } from "react";
import axios from "axios";
import AddToCart from "../components/AddToCart";
import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class AllProducts extends Component {
  state = {
    data: null
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/listings/all");
      const { data } = response;
      this.setState({ data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { data } = this.state;
    return data
      ? data.map((product, index) => {
          console.log(product)
          return (
            <div key={index} className="all_products">
              <h1>title : {product.title}</h1>
              <p>id: {product._id}</p>
              <p>description:{product.description}</p>
              <p>price: ${product.price}</p>
          <p>availability: {product.available ? <span>✅</span> : <span>❌</span>}</p>
              {product.image ? <img width="400" src={product.image} alt="product pic"/> : null}
              <AddToCart product={product} />
            </div>
          );
        })
      : null;
  }
}
export default AllProducts;
