import React, { Component } from "react";
import axios from "axios";
import AddToCart from "../components/AddToCart";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../components/products.module.css";
import { Card, Placeholder } from "semantic-ui-react";
import ReactImageFallback from "react-image-fallback";

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

    return (
      <img className="w-100 card-list-img" src={images[0]} alt="product pic" />
    );
  };

  render() {
    const { data } = this.state;

    return (
      <div className="all_products container d-flex">
        {data &&
          data.map((product, index) => {
            // console.log(product);
            return (
              <Card style={{ width: "350px" }}>
                <Card.Content>
                  <div>
                    <ReactImageFallback
                      src={this.checkImages(product.image)}
                      fallbackImage="https://via.placeholder.com/348x195"
                    />
                  </div>
                  {/* {this.checkImages(product.image)} */}
                  <div className="card-info p-3">
                    <Card.Header>{product.title}</Card.Header>
                    {/* <Card.Meta>
                      <span className="product-id">Item Id: {product._id}</span>
                    </Card.Meta> */}
                    <Card.Description>Price: ${product.price}</Card.Description>
                    <Card.Content extra>
                      {" "}
                      In Stock:{" "}
                      {product.available ? <span>✅</span> : <span>❌</span>}
                    </Card.Content>
                    <Link to={`/listing/${product._id}`}>
                      <Button>Product Details</Button>
                    </Link>
                    <AddToCart product={product} />
                  </div>
                </Card.Content>
              </Card>
            );
          })}
      </div>
    );
  }
}

export default AllProducts;
