import React, { Component } from "react";
import MyForm from "../components/newListingForm";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

class NewListing extends Component {
  state = {
    url: []
  };
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (!token) {
      this.redirect();
    }
  }

  redirect = () => {
    this.props.history.push("/admin/login");
  };

  submit = async values => {
    const token = localStorage.getItem("token");

    let postData = {
      headers: {
        "x-access-token": token
      }
    };
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/listings/new`,
        {
          ...values,
          image: this.state.url
        },
        postData
      );
      this.props.history.push("/admin");
    } catch (error) {}
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
        <Link to={`/admin`}>
          <Button>Back to Admin</Button>
        </Link>
        <div className="d-flex justify-content-center">
          <MyForm onSubmit={this.submit} showWidget={showWidget} />
        </div>
      </div>
    );
  }
}

export default NewListing;
