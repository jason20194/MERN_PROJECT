import React, { Component } from 'react';
import MyForm from '../component/ReduxForm'
import axios from 'axios';

class NewListing extends Component {
  
    submit = async (values) => {
     
      console.log(values)
      const res = await axios.post('http://localhost:5000/listings/new',
        values
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

  render() {
    return (
      <MyForm onSubmit={this.submit}/>
    );
  }
}

export default NewListing


