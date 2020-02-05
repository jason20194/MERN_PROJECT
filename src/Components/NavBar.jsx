import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import Logout from "./Logout";
import AllListingAdmin from "./AllListingsAdmin";
import LogIn from "./LogIn";

class NavBar extends Component {
  state = {
    numberOfItems: 0
  };

  updateNumberOfItems = () => {
    if (this.state.numberOfItems !== this.props.products.length) {
      this.setState({
        numberOfItems: this.props.products.length
      });
    }
  };
  // we need to call updateNumberOfItems on mount and update both
  componentDidMount() {
    this.updateNumberOfItems();
  }

  componentDidUpdate() {
    this.updateNumberOfItems();
  }

  render() {
    console.log(this.state.numberOfItems);
    // let numberOfItems;
    // let parsedProducts;
    // if (this.state.products) {
    //   parsedProducts = JSON.parse(this.state.products);
    //   numberOfItems = parsedProducts.length;
    // }

    // console.log("numberOfItems =   ", numberOfItems);

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            id="brand-image"
            alt="Website Logo"
            src={require("../images/medicinepower.png")}
          />
        </a>
        <a className="navbar-brand">Medicine Power</a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto nav-fill w-100">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/all_products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about_us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fa fa-shopping-cart">
                  <span className="badge badge-light">
                    {this.state.numberOfItems}
                  </span>
                </i>
              </a>
            </li>
            <li className="nav-item">
             <Logout />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.cart);

  return {
    // its stored in cart because we have used cart in combine reducers function in reducers index
    products: state.cart.products
  };
};

export default connect(mapStateToProps)(NavBar);
