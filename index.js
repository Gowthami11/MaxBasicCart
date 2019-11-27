import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./styles.css";
import Products from "./Products";
import Cart from "./Cart";
class App extends Component {
  state = {
    products: [
      { id: 1, title: "eggs", price: 100 },
      { id: 2, title: "chicken", price: 300 },
      { id: 3, title: "fish", price: 900 },
      { id: 4, title: "meat", price: 1000 },
      { id: 5, title: "maggi", price: 20 }
    ],
    cart: []
  };
  deleter = id => {
    const cart = [...this.state.cart];
    cart.splice(id, 1);
    this.setState({ cart });
  };
  changeHandler = (title, price) => {
    var item = {
      id: Math.random(),
      title: title,
      price: price
    };
    console.log("var", item);
    const cart = [...this.state.cart];
    cart.push(item);
    this.setState({ cart });
  };
  render() {
    return (
      <div>
        <NavLink to="/">Products</NavLink>
        <br />
        <NavLink to="/Cart">Cart</NavLink>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Products
                products={this.state.products}
                changeHandler={this.changeHandler}
              />
            )}
          />
          <Route
            path="/Cart"
            exact
            render={() => (
              <Cart cart={this.state.cart} deleter={this.deleter} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
