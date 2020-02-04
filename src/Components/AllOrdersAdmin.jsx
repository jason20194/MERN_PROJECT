import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";

export class AllOrdersAdmin extends Component {
  state = {
    data: null
  };
  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/orders/all");
      const { data } = response;

      this.setState({ data });
    } catch (err) {
      console.log(err);
    }
  }

  fulfilOder = async id => {
    console.log("the id is", id);

    try {
      await axios.put(`http://localhost:5000/orders/fulfil/${id}`);
      // const order = response.data;

      // need to change this method, cant directly call component did mount.
      // make another get request here with the axios instead
      this.componentDidMount();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { data } = this.state;
    console.log(this.state);

    let fulfilledOrders = [];
    let pendingOrders = [];

    if (data) {
      data.map(order => {
        if (order.fulfilled === true) {
          fulfilledOrders.push(order);
        } else {
          pendingOrders.push(order);
        }
        return data;
      });
    }

    // return (
    //   <div>
    //     <h2>Pending Orders</h2>
    //     {pendingOrders !== null
    //       ? pendingOrders.map((order, index) => {
    //           return (
    //             <div key={index}>
    //               <p>id: {order._id}</p>
    //               <p>Total value: ${order.totalValue}</p>
    //               <p>Number of items: {order.numberOfItems}</p>
    //               <p>status: {order.fulfilled ? "fulfilled" : "pending"}</p>
    //               <Button onClick={() => this.fulfilOder(order._id)}>
    //                 Fulfil the order
    //               </Button>
    //               <Link to={`/admin/order/${order._id}`}>
    //                 <Button>View Details</Button>
    //               </Link>
    //             </div>
    //           );
    //         })
    //       : null}
    //     <h2>Fulfilled Orders</h2>
    //     {fulfilledOrders !== null
    //       ? fulfilledOrders.map((order, index) => (
    //           <div key={index}>
    //             <p>id: {order._id}</p>
    //             <p>Total value: ${order.totalValue}</p>
    //             <p>Number of items: {order.numberOfItems}</p>
    //             <p>status: {order.fulfilled ? "fulfilled" : "pending"}</p>
    //             <hr />
    //             <Link to={`/admin/order/${order._id}`}>
    //               <Button>View Details</Button>
    //             </Link>
    //           </div>
    //         ))
    //       : null}
    //   </div>
    // );

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Total Value</th>
              <th>Number of items</th>
              <th>status</th>
              <th>Fulfil</th>
              <th>View details</th>
            </tr>
          </thead>
          <tbody>
            {pendingOrders !== null &&
              pendingOrders.map((order, index) => {
                return (
                  <tr>
                    <td>{order._id}</td>
                    <td>{order.totalValue}</td>
                    <td>{order.numberOfItems}</td>
                    <td>{order.fulfilled ? "fulfilled" : "pending"}</td>
                    <td>
                      <Button onClick={() => this.fulfilOder(order._id)}>
                        Fulfil the order
                      </Button>
                    </td>
                    <td>
                      <Link to={`/admin/order/${order._id}`}>
                        <Button>View Details</Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AllOrdersAdmin;
