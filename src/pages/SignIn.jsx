import React, { Component } from "react";
import LogIn from "../components/LogIn";

class SignIn extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <LogIn onSubmit={this.submit} />
      </div>
    );
  }
}

export default SignIn;
