import React, { Component } from "react";
import axios from 'axios';
import AddToCart from "../Components/AddToCart";
import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class Product extends Component {

    state = {
        product: null
    }

    componentDidMount = async () => {
        const response = await axios.get(`http://localhost:5000/listings/${this.props.match.params.id}`)
        console.log(response.data)
        this.setState({product: response.data})
    }

render() {
  const { product } = this.state;
  return (
    product && 
      <div className="all_products">
    
    <h1>{product.title}</h1>
    <p>Id: {product._id}</p>
    <p>imageURL 1000x1000</p>
    <p>Price: ${product.price}</p>
    <p>Description:{product.description}</p> 
  
    <Button>Buy now</Button>
    <AddToCart product={product} />
    <Link to={`/all_products`}><Button style={{backgroundColor: '#000000'}} size="sm">Back to Product page</Button></Link>
    </div>

  )

  }
}

export default Product;
