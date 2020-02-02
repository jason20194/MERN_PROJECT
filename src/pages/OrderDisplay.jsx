import React, { Component } from "react";
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../components/order.css"

class OrderDisplay extends Component {

  state = {
    order: null
}

componentDidMount = async () => {
    const response = await axios.get(`http://localhost:5000/orders/5e36300f1fb5265c992955ad`)
    // console.log(response.data)
    this.setState({order: response.data})
}

  render() {
    const {order} = this.state
    
    return (
      

          <div class="card">
            <h1 className="title">Order Details</h1>
            <br></br>
           { order !== null && 
          
            <div className="font">

              <p>Order ID: {order._id}</p>
              <p>Name: {order.customer.name} </p>
              <p>Address: {order.customer.address} </p>
              <p>Email: {order.customer.email} </p>
              <p>Items: {order.items.map(item => 
              <p>{item.title}</p>)}</p>
              <p>Number of Items: {order.numberOfItems}</p>
              <hr></hr>
              <p>Total Value: ${order.totalValue}</p>

            </div> }
          </div>

    )
  }
}


export default OrderDisplay;
