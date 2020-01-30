import React from "react";
import { Provider } from "react-redux";

import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./store";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import Payment from "./pages/Payment";
import ThankYou from "./pages/ThankYou";
import AdminDashboard from "./pages/AdminDashboard";
import EditListing from "./pages/EditListing";
import NewListing from "./pages/NewListing";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <div>
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
            <Route path="/edit_listing/:id" component={EditListing} />
            <Route path="/thank_you" component={ThankYou} />
            <Route path="/new_listing" component={NewListing} />
            <Route path="/new_review" component={Reviews} /> 
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
