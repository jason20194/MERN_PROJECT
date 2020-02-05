// Dependencies
import React, { Component } from "react";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";

import axios from "axios";

import { withRouter } from "react-router";

import "../components/login.css";

class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { username, password } = this.state;

    console.log("username", username, "password", password);

    try {
      const response = await axios.post(
        "http://localhost:5000/listings/admin/login",
        {
          username,
          password
        }
      );

      localStorage.setItem("token", response.data.token);
      const token = localStorage.getItem("token");
      if (token) {
        this.redirect();
      }
      console.log(token);
    } catch (err) {
      console.log(err);
    }
  };

  redirect = () => {
    console.log("redirect called", this.props);
    this.props.history.push("/admin");
  };

  render() {
    return (
      <div className="card-container">
        <div className="card2">
          <h1 className="login-form">LOGIN</h1>
          <br></br>
          <Form onSubmit={this.handleSubmit} style={{ width: "80%" }}>
            <FormGroup>
              <Label for="Username"></Label>
              <Input
                type="username"
                name="username"
                placeholder="Your Username.."
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password"></Label>
              <Input
                type="password"
                name="password"
                placeholder="Your Password.."
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button>Log In</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(LogIn);
