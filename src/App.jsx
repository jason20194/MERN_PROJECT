// Dependencies
import React, { Component } from 'react';
import {Provider} from 'react-redux';
// Internals
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from './store';

import Home from "./pages/Home";
import AboutUs from "./pages/admin/AboutUs";
import Contact from "./pages/Contact";
import AllProducts from "./pages/products/AllProducts";
import Product from "./pages/products/Product";
import CartPage from "./pages/CartPage";
import Payment from "./pages/Payment";
import ThankYou from "./pages/ThankYou";
import AdminDashboard from "./pages/admin/AdminDashboard";
import EditListing from "./pages/EditListing";
import NewListing from "./pages/NewListing";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about_us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/all_products" component={AllProducts} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={CartPage} />
          <Route path="payment" component={Payment} />
          <Route path="/thank_you" component={ThankYou} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/edit_lising/:id" component={EditListing} />
          <Route path="/thank_you" component={ThankYou} />
          <Route path="/new_listing" component={NewListing} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
