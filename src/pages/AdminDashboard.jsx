import React, { Component } from "react";
import AllListingAdmin from "../components/AllListingsAdmin";
import AllOrdersAdmin from "../components/AllOrdersAdmin";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Logout from "../components/Logout";
import "../pages/AdminDashboard.css";

import { Link } from "react-router-dom";

class AdminDashboard extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (!token) {
      this.redirect();
    }
  }

  redirect = () => {
    this.props.history.push("/admin/login");
  };

  render() {
    return (
      <div>
        <div className="logout-button">
          <Logout />
        </div>
        <Link to={`/new_listing`}>
          <Button className="create-listing">Create Listing</Button>
        </Link>

        <Tabs
          defaultActiveKey="listings"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab eventKey="listings" title="Listings">
            <AllListingAdmin />
          </Tab>
          <Tab eventKey="orders" title="Orders">
            <AllOrdersAdmin />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default AdminDashboard;
