import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";
// import DeleteListing from "./DeleteConfirmation";

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

  render() {
    const { data } = this.state;

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

              <Link to={`/admin/delete_listing/${listing._id}`}>
                <Button style={{ backgroundColor: "#000000" }} size="sm">
                  Delete Listing
                </Button>
              </Link>
            </div>
          );
        })
      : null;
  }
}

export default AllListingAdmin;
