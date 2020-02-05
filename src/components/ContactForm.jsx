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
      message: "",
      successMessage: ""
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
      let response = await axios.post("/api/form", {
        name,
        email,
        message
      });
      this.setState({ successMessage: response.data });
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="card-container">
        <div class="card2">
          <h1>CONTACT US</h1>
          <Form onSubmit={this.handleSubmit} style={{ width: "600px" }}>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input
                className="name"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                className="email"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Message">Message</Label>
              <Input
                className="message"
                type="textarea"
                name="message"
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button className="submit-button">Submit</Button>
          </Form>
        </div>
        {this.state.successMessage ? (
          <p style={{ color: "green" }}>{this.state.successMessage}</p>
        ) : null}
      </div>
    );
  }
}

export default ContactForm;
