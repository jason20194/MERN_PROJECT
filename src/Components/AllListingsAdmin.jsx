import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Redirect, Link } from "react-router-dom";

export class AllListingAdmin extends Component {
  state = {
    data: null
  };
  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/listings/all");
      const { data } = response;
      // console.log(data);

      this.setState({ data });
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { data } = this.state;
    console.log(this.state);

    return data
      ? data.map((product, index) => {
          console.log(product);
          return (
            <div key={index} className="">
              <h1>{product.title}</h1>
              <p>Id: {product._id}</p>
              <p>Price: ${product.price}</p>
              <p>
                availability:{" "}
                {product.available ? <span>✅</span> : <span>❌</span>}
              </p>
              {/* {this.checkImages(product.image)} */}
              <Link to={`/edit_listing/${product._id}`}>
                <Button>Edit Listing</Button>
              </Link>
            </div>
          );
        })
      : null;
  }
}

export default AllListingAdmin;
