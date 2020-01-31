import React, { Component } from "react";
import StarRatingComponent from 'react-star-rating-component';
import MyForm from "../components/ReviewForm";
 
class RatingStar extends Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2>RATING:</h2>
        <MyForm onSubmit={this.submit}/>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default RatingStar;
 
