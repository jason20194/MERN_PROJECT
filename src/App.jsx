import React from "react";
import { connect } from "react-redux";
import { updateCart } from "./actions/cartAction";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
import OrderDisplay from "./pages/OrderDisplay";
import Reviews from "./pages/Reviews";
import SignIn from "./pages/SignIn";

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    let products = JSON.parse(localStorage.getItem("products"));
    if (!products) {
      products = [];
    }
    this.props.updateCart(products);
    this.setState({
      loading: false
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return null;
    } else {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about_us" component={AboutUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/all_products" component={AllProducts} />
            <Route path="/listing/:id" component={Product} />
            <Route path="/cart" component={CartPage} />
            <Route path="/payment" component={Payment} />
            <Route path="/thank_you" component={ThankYou} />
            <Route path="/admin" component={AdminDashboard} exact={true} />
            <Route path="/admin/order/:id" component={OrderDisplay} />
            <Route path="/edit_listing/:id" component={EditListing} />
            <Route path="/thank_you" component={ThankYou} />
            <Route path="/new_listing" component={NewListing} />
            <Route path="/new_review" component={Reviews} />
            <Route path="/login" component={SignIn} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

const mapDispatchProps = {
  updateCart
};

export default connect(null, mapDispatchProps)(App);
