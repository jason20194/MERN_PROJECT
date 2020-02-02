import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Redirect, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DeleteListing from "./DeleteListing";

export class AllListingAdmin extends Component {
  state = {
    data: null
    // setShow: false
  };
  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/listings/all");
      const { data } = response;
      // console.log(data);

      this.setState({ data });
      // console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }

  deleteListing = async id => {
    console.log("the id is", id);

    try {
      const response = await axios.delete(
        `http://localhost:5000/listings/delete/${id}`
      );
      const order = response.data;
      console.log(order);
      // is this the right approach to call componentDidMount() in another method?
      // this.setState({ setShow: false });
      this.componentDidMount();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { data } = this.state;
    // console.log(this.state);
    // const handleClose = () => this.setState({ setShow: false });
    // const handleShow = () => this.setState({ setShow: true });

    return data
      ? data.map((listing, index) => {
          // console.log(listing);
          return (
            <div key={index} className="">
              <h1>{listing.title}</h1>
              <p>Id: {listing._id}</p>
              <p>Price: ${listing.price}</p>
              <p>
                availability:{" "}
                {listing.available ? <span>✅</span> : <span>❌</span>}
              </p>
              {/* {this.checkImages(listing.image)} */}
              <Link to={`/edit_listing/${listing._id}`}>
                <Button>Edit Listing</Button>
              </Link>

              {/* <DeleteListing
                handleClose={handleClose}
                handleShow={handleShow}
                deleteListing={this.deleteListing}
                show={this.state.setShow}
                listingId={listing._id}
              /> */}

              <Button onClick={() => this.deleteListing(listing._id)}>
                Delete Product{" "}
              </Button>
            </div>
          );
        })
      : null;
  }
}

export default AllListingAdmin;
