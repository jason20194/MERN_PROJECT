import React, { Component } from "react";
import MyForm from "../components/newListingForm";
import axios from "axios";
import styles from "../components/products.module.css"

class NewListing extends Component {
    state = {
      url: []
    }


    submit = async (values) => {
      await axios.post('http://localhost:5000/listings/new',
        { 
          ...values,
          image: this.state.url
        }
      )
    }

  render() {
    return (
    <div className={styles.formWrapper} >
        <MyForm onSubmit={this.submit} />
    </div>
    );
  }
}

export default NewListing;
