import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../components/order.css";

class OrderDisplay extends Component {
  state = {
    order: null,
    fulfilled: false
  };

  componentDidMount = async () => {
    // const id = this.props.match.params.id || this.state.order._id;
    const response = await axios.get(
      `http://localhost:5000/orders/${this.props.match.params.id}`
    );
    console.log(this.props.match.params.id);
    this.setState({ order: response.data });
  };

  fulfilOder = async id => {
    console.log("the id is", id);

    try {
      const response = await axios.put(
        `http://localhost:5000/orders/fulfil/${id}`
      );

      this.setState({ fulfilled: true });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { order } = this.state;

    return (
      <div className="card">
        <h1 className="title">Order Details</h1>
        <br></br>
        {order
          ? order !== null && (
              <div className="font">
                {console.log("order", order)}
                <p>Order ID: {order._id}</p>
                <p>Name: {order.customer.name} </p>
                <p>Address: {order.customer.address} </p>
                <p>Email: {order.customer.email} </p>
                <p>
                  Items:{" "}
                  {order.items.map((item, index) => (
                    <p>{item.title}</p>
                  ))}
                </p>
                <p>Number of Items: {order.numberOfItems}</p>
                <hr></hr>
                <p>Total Value: ${order.totalValue}</p>
                {!this.state.fulfilled ? (
                  <Button onClick={() => this.fulfilOder(order._id)}>
                    Fulfil
                  </Button>
                ) : null}
              </div>
            )
          : null}
      </div>
    );
  }
}

export default OrderDisplay;
