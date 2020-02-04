import React, { Component } from "react";
import axios from "axios";
import AddToCart from "../components/AddToCart";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import style from "../components/products.module.css"

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

  checkImages = images => {
    if (!images) {
      return null;
    }
    const imagesLength = images.length;
    if (typeof images === String) {
      return <img width="400" src={images} alt="product pic" />;
    }
    if (imagesLength === 0) {
      return null;
    }
    return <img width="300" height="300" src={images[0]} alt="product pic" />;
  };

  render() {
    const { data } = this.state;
    return data
      ? data.map((product, index) => {
          console.log(product);
          return (
            <div key={index} className="all_products">
              <h1>{product.title}</h1>
              <p>Id: {product._id}</p>
              <p>Price: ${product.price}</p>
              <p>
                availability:{" "}
                {product.available ? <span>✅</span> : <span>❌</span>}
              </p>
              {this.checkImages(product.image)}
              <Link to={`/listing/${product._id}`}>
                <Button>Product Details</Button>
              </Link>
              {product.available ? <AddToCart product={product} /> : null}
            </div>
          );
        })
      : null;
  }
}
export default AllProducts;
