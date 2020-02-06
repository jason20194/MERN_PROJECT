import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../components/order.css";
import { Redirect, Link } from "react-router-dom";
import { Table } from "reactstrap";

class OrderDisplay extends Component {
  state = {
    order: null,
    fulfilled: false
  };

  componentDidMount = async () => {
    let token = localStorage.getItem("token");
    if (!token) {
      this.redirect();
    }
    const response = await axios.get(
      `http://localhost:5000/orders/${this.props.match.params.id}`  
    );
    this.setState({ order: response.data });
  };

  redirect = () => {
    this.props.history.push("/admin/login");
  };

  fulfilOder = async id => {
    console.log("the id is", id);

    try {
      await axios.put(`http://localhost:5000/orders/fulfil/${id}`);

      this.setState({ fulfilled: true });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { order } = this.state;

    return (
      <div>
        <br></br>
        {order
          ? order !== null && (
              <div className="font">
                {console.log("order", order)}
                <h1 className="title">Order Details:</h1>
                <hr></hr>
                <p>Order ID: {order._id}</p>

                <h1>Customer Details:</h1>
                <hr></hr>
                <p>Name: {order.customer.name} </p>
                <p>Address: {order.customer.address} </p>
                <p>Email: {order.customer.email} </p>
                <p>
                  <h1>Products:</h1>
                  <hr></hr>
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
        <div>
          <Link to={`/admin`}>
            <Button
              style={{ backgroundColor: "#000000" }}
              size="md"
              className="back-to-product-btn"
            >
              Back to Admin Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default OrderDisplay;
