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
      await axios.post("/api/form", {
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
      <div className="card-container">
        <div class="card2">
          <h1 className="contact-form-header"> CONTACT US</h1>
          <Form onSubmit={this.handleSubmit} style={{ width: "80%" }}>
            <FormGroup>
              <Label for="Name"></Label>
              <Input
                type="text"
                name="name"
                placeholder="Your Name.."
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Email"></Label>
              <Input
                type="email"
                name="email"
                placeholder="Your Email.."
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Message"></Label>
              <Input
                type="textarea"
                style={{ height: 200 }}
                name="message"
                placeholder="Your Message.."
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
