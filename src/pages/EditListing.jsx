import React, { Component } from "react";
import EditForm from "../components/EditForm";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditListing extends Component {
  state = {
    url: [],
    data: {},
    loading: true
  };
  async componentDidMount() {
    let token = localStorage.getItem("token");
    if (!token) {
      this.redirect();
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
        // url: response.data.image
      });
    } catch (err) {
      // console.log(err);
    }
  }

  redirect = () => {
    this.props.history.push("/admin/login");
  };

  submit = async values => {
    const token = localStorage.getItem("token");
    console.log("inside edit axios and this is token from lclstrg = ", token);

    // this.setState({
    //   data: values,
       
    // })
    values.image = this.state.url
    console.log('values',values)
    let postData = {
      headers: {
        "x-access-token": token
      }
    };
    await axios
      .put(
        `http://localhost:5000/listings/edit/${this.props.match.params.id}`,
        values,
        postData
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
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "medicinepower",
        uploadPreset: "medicinepower"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log('result info url', result.info.url);
          this.setState(prevState => {
            return {
              
                url: [...prevState.url, result.info.url]
              
            };
          });
          console.log('state after upload', this.state.url)
        }
      }
    );

    const showWidget = () => {
      widget.open();
      // console.log(widget);
    };

    if (this.state.loading) {
      return null;
    }

    return (
      <div className= 'd-flex justify-content-center'>
        <EditForm onSubmit={this.submit} initialValues={this.state.data} showWidget={showWidget}/>
      </div>
    );
  }
}

export default EditListing;
