import React, { Component } from "react";
import axios from 'axios';
import AddToCart from "../components/AddToCart";
import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class OrderDisplay extends Component {

  state = {
    data: null
}

componentDidMount = async () => {
    const response = await axios.get(`http://localhost:5000/order/${this.props.match.params.id}`)
    console.log(response.data)
    this.setState({product: response.data})
}


  render() {
    return (
      <div>
        <h1>Hello from Order Display page</h1>
      </div>
    );
  }
}


export default OrderDisplay;
