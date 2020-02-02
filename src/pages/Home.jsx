import React, { Component } from "react";
import Navbar from "../components/NavBar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello from Home page</h1>
      </div>
    );
  }
}

export default Home;