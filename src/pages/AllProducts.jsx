import React, { Component } from "react";
import axios from "axios";
import AddToCart from "../Components/AddToCart";

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
              <h1>titile : {product.title}</h1>
              <p>id: {product._id}</p>
              <p>description:{product.description}</p>
              <p>${product.price}</p>
              <AddToCart product={product} />
            </div>
          );
        })
      : null;
  }
}

export default AllProducts;
