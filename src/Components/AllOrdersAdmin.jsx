import React, { Component } from "react";
import axios from "axios";

export class AllOrdersAdmin extends Component {
  state = {
    data: null
  };
  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/orders/all");
      const { data } = response;
      // console.log(data);

      this.setState({ data });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { data } = this.state;
    console.log(this.state);
    return null;
    // return data
    //   ? data.map((order, index) => {
    //       console.log(product);
    //       return (
    //         <div key={index} className="">
    //           <h1>{order._id}</h1>
    //           <p>Id: {order.totalValue}</p>
    //           <p>Price: ${product.price}</p>
    //           <p>
    //             availability:{" "}
    //             {product.available ? <span>✅</span> : <span>❌</span>}
    //           </p>
    //           {/* {this.checkImages(product.image)} */}
    //           <Link to={`/edit_listing/${product._id}`}>
    //             <Button>Edit Listing</Button>
    //           </Link>
    //         </div>
    //       );
    //     })
    //   : null;
  }
}

export default AllOrdersAdmin;
