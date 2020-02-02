import React, { Component } from "react";
import AllListingAdmin from "../components/AllListingsAdmin";
import AllOrdersAdmin from "../components/AllOrdersAdmin";
import Tabs from "react-bootstrap/Tabs";

class AdminDashboard extends Component {
  render() {
    return (
      <div>
        {/* <AllListingAdmin /> */}
        <AllOrdersAdmin />
      </div>
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
