import React, { Component } from "react";
import AllListingAdmin from "../components/AllListingsAdmin";
import AllOrdersAdmin from "../components/AllOrdersAdmin";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Redirect, Link } from "react-router-dom";

class AdminDashboard extends Component {
  async componentDidMount() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
    }
  }

  render() {
    if (!this.token) {
      return <Redirect to="/admin/login" />;
    }

    return (
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
    );
  }
}

export default AdminDashboard;

{
  /* <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="listings" title="Listings">
    <AllListingAdmin />
  </Tab>
  <Tab eventKey="listings" title="Orders">
    <AllOrdersAdmin />
  </Tab>
</Tabs>; */
}
