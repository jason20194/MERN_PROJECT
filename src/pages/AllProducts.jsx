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
          return (
            <div key={index} className="all_products">
              <h1>{product.title}</h1>
              <p>Id: {product._id}</p>
              <p>Image: 100x100 {product.Image}</p>
              <p>Available: Yes/No {product.available} </p>
              <p>Price: ${product.price}</p>

              <Link to={`/listing/${product._id}`}>
                <Button>Product Details</Button>
              </Link>
              <AddToCart product={product} />
            </div>
          );
        })
      : null;
  }
}
export default AllProducts;
