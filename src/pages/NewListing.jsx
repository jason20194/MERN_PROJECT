import React, { Component } from "react";
import MyForm from "../components/newListingForm";
import axios from "axios";

class NewListing extends Component {
  state = {
            url: null
          }


    submit = async (values) => {
      await axios.post('http://localhost:5000/listings/new',
        { 
          ...values,
          image: this.state.url
        }
      )
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
  };

  // checkUploadResult = (resultEvent) => {
  //   if (resultEvent.event === 'success') {
  //     console.log(this.props.currentUser.id,
  //       {
  //         caption: '',
  //         url: resultEvent.info.secure_url})
  //       .then(this.props.history.push(`/profile`))
  //   }
  // }

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "medicinepower",
        uploadPreset: "medicinepower"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          // console.log(this.props.product)
          // // axios.post('http://localhost:5000/listings/new', result.info)
          // this.submit(result.info)
          this.setState({
            url: result.info.url
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
