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
  changeHandler = (title, price, index) => {
    var item = {
      id: index,
      title: title,
      price: price,
      index: Math.random()
    };
    console.log("var", item);
    const cart = [...this.state.cart];
    let index1 = cart.findIndex(ct => ct.id === index);
    console.log("index1", index1);
    if (index1 < 0) cart.push({ ...item, quantity: 1 });
    else {
      const updatedItem = {
        ...cart[index1]
      };
      updatedItem.quantity++;
      cart[index1] = updatedItem;
    }

    console.log("cart count", cart);
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
