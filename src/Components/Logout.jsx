import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";

export class Logout extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  logout = () => {
    const token = localStorage.removeItem("token");
    console.log("redirect called", this.props);

    if (!token) {
      this.redirect();
    }
  };

  redirect = () => {
    console.log("redirect called", this.props);
    this.props.history.push("/admin/login");
  };

  render() {
    return (
      <Button
        style={{
          margin: "5px",
          background: "green"
        }}
        onClick={this.logout}
      >
        Logout
      </Button>
    );
  }
}

export default withRouter(Logout);
