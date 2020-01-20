import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class ProductForm extends Component {

    renderDropdown = () => {
        return(
            <select name="cars">
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
        )
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            <div>
                <label htmlFor="productTitle">Title:</label>
                <Field name ="productTitle" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="productPrice">Price:</label>
                <Field name="productPrice" component="input" type="integer"/>
            </div>
            <div>
                <label htmlFor="productAvailability">Availability:</label>
                <Field name="productAvailability" component={this.renderDropdown} type="text"/>
            </div>
            <div>
                <label htmlFor="productDescription">Description:</label>
                <Field name="productDescription"
                component="textarea"
                type="text"/>
            </div>
            <button type="choose-picture">Choose File</button>
            <button type="create-product-listing">Create 
            Product Listing</button>
          </form>)
    }
}

// Decorate the form component
export default reduxForm({form: 'product'})(ProductForm)
