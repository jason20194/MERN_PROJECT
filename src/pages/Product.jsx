import React, { Component } from "react";
import axios from "axios";
import AddToCart from "../components/AddToCart";
import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../components/products.css";

class Product extends Component {
  state = {
    product: null
  };

  componentDidMount = async () => {
    const response = await axios.get(
      `http://localhost:5000/listings/${this.props.match.params.id}`
    );
    console.log(response.data);
    this.setState({ product: response.data });
  };

  checkImages = (images) => {
    if (!images) {
      return null
    }
    if (typeof(images) === String) {
      return <img width="400" src={images} alt="product pic" />      
    }
    if (images.length === 0) {
      return null
    }
    return images.map((image) => {
      return <img width="400" src={image} alt="product pic" />
    })
  }

  render() {
    const { product } = this.state;
    return (
      product && (
        <div className="Content">
          <div className="ProductDetailsImageWrapper"></div>
          {this.checkImages(product.image)}
          <p className="ProductTitle">{product.title}</p>
          <p className="ProductPrice">Price: ${product.price}</p>

          <div className="ProductDescription">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <AddToCart product={product} />
          <Button>Buy now</Button>
          <br></br>
          <Link to={`/all_products`}>
            <Button style={{ backgroundColor: "#000000" }} size="sm">
              Back to Product page
            </Button>
          </Link>
        </div>
      )
    );
  }
}

export default Product;
