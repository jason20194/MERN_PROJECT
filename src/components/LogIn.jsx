// Dependencies
import React, { Component } from "react";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";

import axios from "axios";

import "../components/login.css"

class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await axios.post("/api/form", {
        email,
        password
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div class="card">
        <h1>LOGIN</h1>
        <br></br>
      <Form onSubmit={this.handleSubmit} style={{ width: "600px" }}>
        <FormGroup>
          <Label for="Email">Email:</Label>
          <Input type="email" name="email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="Name">Password:</Label>
          <Input type="text" name="name" onChange={this.handleChange} />
        </FormGroup>
        <Button>Log In</Button>
      </Form>
      </div>
    );
  }
}

export default LogIn;
