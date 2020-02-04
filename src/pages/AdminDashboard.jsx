import React, { Component } from "react";
import AllListingAdmin from "../components/AllListingsAdmin";
import AllOrdersAdmin from "../components/AllOrdersAdmin";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

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
        <Link to={`/new_listing`}>
          <Button
            style={{
              margin: "5px",
              background: "pink"
            }}
          >
            Create Listing
          </Button>
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
