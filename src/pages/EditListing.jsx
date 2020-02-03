import React, { Component } from "react";
import EditForm from "../components/EditForm";
import axios from "axios";

class EditListing extends Component {
  state = {
    url: [],
    data: {},
    loading: true
  };
  async componentDidMount() {
    console.log(this.props);

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
    console.log(values);
    const res = await axios
      .put(
        `http://localhost:5000/listings/edit/${this.props.match.params.id}`,
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
          console.log(result.info.url)
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

    if (this.state.loading) {
      return null;
    }

    return (
    <div>
      <EditForm onSubmit={this.submit} initialValues={this.state.data}/>
      <div id='photo-form-container'>
          <button onClick={showWidget}>Upload Photo</button>
        </div>
    </div>
    );
  }
}

export default EditListing;
