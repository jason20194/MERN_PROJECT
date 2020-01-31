import React, { Component } from "react";
import MyForm from "../components/newListingForm";
import axios from "axios";

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
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "medicinepower",
        uploadPreset: "medicinepower"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.setState((prevState) => {
            return {
              url: [...prevState.url, result.info.url]
            }
          })
        }
      }
    );

    const showWidget = () => {
      widget.open();
      console.log(widget);
    };

    return (
      <div>
        <MyForm onSubmit={this.submit}/>
      <div id='photo-form-container'>
      <button onClick={showWidget}>Upload Photo</button>
    </div>
    <div id='photo-form-container'>
      <button onClick={showWidget}>Upload another Photo</button>
    </div>
    <div id='photo-form-container'>
      <button onClick={showWidget}>Upload another Photo</button>
    </div>
    </div>
    );
  }
}

export default NewListing;
