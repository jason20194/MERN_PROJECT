import React, { Component } from 'react';
import EditForm from '../component/EditForm'
import axios from 'axios'


class EditListing extends Component {
  state = {
    data: {},
    loading: true,
  }
  async componentDidMount() {
    console.log(this.props);
    
    try {
      const response = await axios.get(`http://localhost:5000/listings/${this.props.match.params.id}`)

    

      
      // console.log(this.props.match.params.id)
      console.log(response);
      
      this.setState({ 
        data:response.data,
        loading: false,
       });
    } catch (err) {
      // console.log(err);
    }
  }

  
  submit = async (values) => {
     
    
    console.log(values)
    const res = await axios.put(`http://localhost:5000/listings/edit/${this.props.match.params.id}`, values)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
    
  

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <EditForm onSubmit={this.submit} initialValues={this.state.data}/>
    );
  }
}

export default EditListing

