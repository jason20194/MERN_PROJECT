import React, { Component } from "react";
import axios from "axios";

export class AllListingAdmin extends Component {
  state = {
    data: null
  };
  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/listings/all");
      const { data } = response;
      console.log(data);

      this.setState({ data });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return <div></div>;
  }
}

export default AllListingAdmin;
