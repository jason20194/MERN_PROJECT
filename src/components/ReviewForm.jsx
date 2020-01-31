import React, { Component } from './node_modules/react';
import { Field, reduxForm } from './node_modules/redux-form';

const validate = (values) => {
    let errors = [];
  
    if(!values.review)
    {
      errors.review="This is a required field"
    }

    return errors;
};

class ReviewForm extends Component {

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
                <Field name ="review" component={this.renderField} type="text-area" label="Review" />
                <input type="submit" value="Post Review" />
            </div>
            
            
            </form>)
      }
}

export default reduxForm({form:
'review', validate})(ReviewForm)