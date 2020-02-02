import React, { Component } from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/NavBar";

class Contact extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1>Contact Form</h1>
        <ContactForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default Contact;
