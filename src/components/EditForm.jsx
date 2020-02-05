import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import styles from "../components/products.module.css";
import Button from "react-bootstrap/Button";

const validate = values => {
  let errors = [];

  if (!values.title) {
    errors.title = "This is a required field";
  }

  if (!values.price) {
    errors.price = "This is a required field";
  }

  return errors;
};

class EditForm extends Component {
  // renderDropdown = () => {
  //     return(
  //         <select name="productAvailability">
  //           <option value="In Stock">In Stock</option>
  //           <option value="Out of Stock">Out of Stock</option>
  //         </select>
  //     )
  // }

 

  renderField = ({ input, type, placeholder, meta: { touched, error, warning } }) => {
    return (
      <div>
        <input {...input} type={type} className="myInput" placeholder={placeholder}/>
        {touched && error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    );
  };
  renderMessageField = ({
    input,
    type,
    label,
    meta: { touched, error, warning }
  }) => {
    return (
      <div>
        <textarea
          rows="10"
          cols="56"
          {...input}
          type={type}
          className="myTextArea"
          id={styles.productTextArea}
          placeholder="Description:"
        />
        {touched && error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    );
  };

  render() {
    // let widget = window.cloudinary.createUploadWidget(
    //   {
    //     cloudName: "medicinepower",
    //     uploadPreset: "medicinepower"
    //   },
    //   (error, result) => {
    //     if (!error && result && result.event === "success") {
    //       this.setState((prevState) => {
    //         return {
    //           url: [...prevState.url, result.info.url]
    //         }
    //       })
    //     }
    //   }
    // );


    // const showWidget = () => {
    //   widget.open();
    //   console.log(widget);
      
    // };

    return (
      <div className={styles.formWrapper}>
      <form onSubmit={this.props.handleSubmit}>
        <h1>EDIT LISTING</h1>
        <div>
          <Field
            name="title"
            component={this.renderField}
            type="text"
            placeholder="Title:"
          />
        </div>
        <div>
          <Field
            name="price"
            component={this.renderField}
            type="number"
            placeholder="Price:"
          />
        </div>
        <div>
          In Stock
          <Field name="available" component="input" type="checkbox"></Field>
        </div>
        <div>
          <Field
            name="description"
            component={this.renderMessageField}
            type="textarea"
            placeholder="Description:"
          />
        </div>
        <div className='d-flex justify-content-between'>

        <Button onClick={this.props.showWidget}>Choose File</Button>
        <Button type="submit">Save Changes</Button> 
        <Button onClick={this.props.reset}>Reset</Button>
        </div>


      </form>
      </div>
    );
  }
}

export default reduxForm({ form: "product", validate })(EditForm);
