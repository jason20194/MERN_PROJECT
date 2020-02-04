import React, { Component } from "react";
import MyForm from "../components/newListingForm";
import axios from "axios";
import { Redirect } from "react-router-dom";

class NewListing extends Component {
  state = {
    url: []
  };
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/admin/login" />;
    }
  }

  submit = async values => {
    const token = localStorage.getItem("token");

    let postData = {
      headers: {
        "x-access-token": token
      }
    };

    await axios.post(
      "http://localhost:5000/listings/new",
      {
        ...values,
        image: this.state.url
      },
      postData
    );
  };

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "medicinepower",
        uploadPreset: "medicinepower"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.setState(prevState => {
            return {
              url: [...prevState.url, result.info.url]
            };
          });
        }
      }
    );

    const showWidget = () => {
      widget.open();
      console.log(widget);
    };

    return (
      <div>
        <MyForm onSubmit={this.submit} />
        <div id="photo-form-container">
          <button onClick={showWidget}>Upload Photo</button>
        </div>
      </div>
    );
  }
}

export default NewListing;
