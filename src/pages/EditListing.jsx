import React, { Component } from 'react';
import EditForm from '../component/EditForm'

class EditListing extends Component {

  submit = (values) => {
     
    console.log(values)
    
  }

  render() {
    return (
      <EditForm onSubmit={this.submit}/>
    );
  }
}

export default EditListing

