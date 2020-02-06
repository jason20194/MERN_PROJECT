import React, { Component } from "react";
import axios from "axios";  

class ThankYou extends Component {
  // state = {
  //   order: null,
  //   fulfilled: false
  // };

  // componentDidMount = async () => {
  //   let token = localStorage.getItem("token");
  //   // console.log('token', token)
  //   const orderId = this.props.location.state.orderId
  //   console.log('orderId in ThankYou', orderId)
  //   console.log('thank you props', this.props)
  //   if (!token) {
  //     this.redirect();
  //   }
  //   const response = await axios.get(
  //     `http://localhost:5000/orders/${orderId}`
  //   );
  //   console.log('response data', response.data)
  //   this.setState({ order: response.data });
  // };
  render() {
    // const { order } = this.state;

    return (
      <div className="thank-you">
        <h1>THANK YOU</h1>
        <p>Thanks for your purchase! We look forward to serving you again! :)</p>
        {/* {order
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
              </div>
            )
          : null} */}
      </div>
      
    );
  }
}

export default ThankYou;
