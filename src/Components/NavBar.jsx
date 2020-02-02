import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "../pages/Home";

class Navbar extends React.Component{
    render() {
        return (
            <div class = "navbar">
              <ul id="nav">
                <li><a href="">Home</a></li>
                <li><a href="sign_in">Sign In</a></li>
                <li><a href="all_products">Products</a></li>
                <li><a href="about_us">About Us</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="cart">Cart</a></li>
              </ul>
            </div>
        );
    }
}

class App extends React.Component {
  render () {
    return (
        <BrowserRouter>
      <div>
        <Navbar/>
        <div>
        <Route path='/' component={Home} />
          <h1>Navbar page</h1>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}


export default Navbar;