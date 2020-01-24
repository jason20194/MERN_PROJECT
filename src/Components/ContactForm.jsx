// Dependencies
import React, { Component } from "react";

// import { Field, reduxForm } from "redux-form";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";

import axios from "axios";

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;
    try {
      const form = await axios.post("/api/form", {
        name,
        email,
        message
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{ width: "600px" }}>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input type="text" name="name" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="Message">Message</Label>
          <Input type="textarea" name="message" onChange={this.handleChange} />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default ContactForm;
