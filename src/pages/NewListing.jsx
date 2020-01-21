import React, { Component } from 'react';
import MyForm from '../component/ReduxForm'

class NewListing extends Component {
  
    submit = (values) => {
     
      console.log(values)
      
    }

  render() {
    return (
      <MyForm onSubmit={this.submit}/>
    );
  }
}

export default NewListing


