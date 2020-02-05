import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

class DeleteConfirmation extends Component {
  state = {
    listing: null,
    deleted: false,
    message: "Are you Sure you want to delete this listing?"
  };

  componentDidMount = async () => {
    let token = localStorage.getItem("token");
    if (!token) {
      this.redirect();
    }
    const response = await axios.get(
      `http://localhost:5000/listings/${this.props.match.params.id}`
    );
    console.log(response.data);
    this.setState({ listing: response.data });
  };
  redirect = () => {
    this.props.history.push("/admin/login");
  };

  checkImages = images => {
    if (!images) {
      return null;
    }
    if (typeof images === String) {
      return <img width="400" src={images} alt="product pic" />;
    }
    if (images.length === 0) {
      return null;
    }
    return images.map(image => {
      return <img width="400" src={image} alt="product pic" />;
    });
  };

  deleteListing = async id => {
    const token = localStorage.getItem("token");

    let postData = {
      headers: {
        "x-access-token": token
      }
    };
    console.log("the id is", id);

    try {
      await axios.delete(
        `http://localhost:5000/listings/delete/${id}`,
        postData
      );
      // const order = response.data;
      this.setState({
        deleted: true,
        message: "This listing has been deleted"
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { listing } = this.state;
    return (
      listing && (
        <div className="Content">
          <div className="ProductDetailsImageWrapper"></div>
          {this.checkImages(listing.image)}
          <p className="ProductTitle">{listing.title}</p>
          <p className="ProductPrice">Price: ${listing.price}</p>
          <div className="ProductDescription">
            <h2>Description</h2>
            <p>{listing.description}</p>
          </div>
          <hr />
          <h5>{this.state.message}</h5>
          {!this.state.deleted ? (
            <Button onClick={() => this.deleteListing(listing._id)}>
              Delete Product{" "}
            </Button>
          ) : (
            <Link to={`/admin`}>
              <Button style={{ backgroundColor: "green" }} size="sm">
                Back to Dashboard
              </Button>
            </Link>
          )}
          <br></br>
        </div>
      )
    );
  }
}

export default DeleteConfirmation;
