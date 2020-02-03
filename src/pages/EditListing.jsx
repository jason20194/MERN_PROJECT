import React, { Component } from "react";
import EditForm from "../components/EditForm";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class EditListing extends Component {
  state = {
    url: [],
    data: {},
    loading: true
  };
  async componentDidMount() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/listings/${this.props.match.params.id}`
      );

      // console.log(this.props.match.params.id)
      console.log(response);

      this.setState({
        data: response.data,
        loading: false,
        url: response.data.image
      });
    } catch (err) {
      // console.log(err);
    }
  }

  submit = async values => {
    // console.log(values);
    const token = localStorage.getItem("token");
    console.log("inside edit axios and this is token from lclstrg = ", token);

    let configgg = {
      headers: {
        "x-access-token": token
      }
    };
    const res = await axios
      .put(
        `http://localhost:5000/listings/edit/${this.props.match.params.id}`,
        values,
        configgg
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(values);

    // that is this code doing?
    // {
    //   ...values,
    //   image: this.state.url
    // }
  };

  render() {
    if (!this.token) {
      return <Redirect to="/admin/login" />;
    }
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "medicinepower",
        uploadPreset: "medicinepower"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
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

    if (this.state.loading) {
      return null;
    }

    return (
      <div>
        <EditForm onSubmit={this.submit} initialValues={this.state.data} />
        <div id="photo-form-container">
          <button onClick={showWidget}>Upload Photo</button>
        </div>
      </div>
    );
  }
}

export default EditListing;
