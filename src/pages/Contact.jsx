import React, { Component } from "react";
import ContactForm from "../components/ContactForm";


class Contact extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default Contact;
