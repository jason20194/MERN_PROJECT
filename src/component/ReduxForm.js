import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
    let errors = [];
  
    if(!values.productTitle)
    {
      errors.productTitle="This is a required field"
    }

    if(!values.productPrice)
    {
        errors.productPrice="This is a required field"
    }

    
  
    
    return errors;
    };

class ListingForm extends Component {

    renderDropdown = () => {
        return(
            <select name="productAvailability">
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
        )
    }

    renderField = ({input,type,label,meta:{touched,error,warning}}) => {
        return(
          <div>
            <label><h2>{label}:</h2></label>
            <input {...input} type={type} className="myInput" />
            {touched && 
            (error && <div style={{color: "red"}}>{error}</div>)}
          </div>
        )
      }
    renderMessageField = ({input,type,label,meta:{touched,error,warning}}) => {
        return(
          <div>
            <label><h2>{label}:</h2></label>
            <textarea rows="10" cols="56" {...input} type={type} className="myTextArea" />
            {touched && 
            (error && <div style={{color: "red"}}>{error}</div>)}
          </div>
        )
      }
  

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            <div>
                <Field name ="productTitle" component={this.renderField} type="text" label="Title"/>
            </div>
            <div>
                <Field name="productPrice" component={this.renderField} type="number" label="Price"/>
            </div>
            <div>
                <label>Availability:</label>
                <Field name="productAvailability" component={this.renderDropdown} type="text" label="Availability"/>
            </div>
            <div>
             
                <Field name="productDescription"
                component={this.renderMessageField}
                type="textarea" label="Description"/>
            </div>
            
            <input type="submit" value="Create Product Listing" />
            <button onClick={this.props.reset}>Reset</button>
          </form>)
    }
}

// Decorate the form component
export default reduxForm({form: 'product',validate})(ListingForm)
