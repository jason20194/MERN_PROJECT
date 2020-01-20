import React, { Component } from 'react';
import ReduxForm from '../component/ReduxForm'; 

class NewListing extends Component {
  
    submit = (values) => {
      console.log(values);
    }
  render() {
    return (
      <ReduxForm onSubmit={this.submit}/>
    );
  }
}

export default NewListing

