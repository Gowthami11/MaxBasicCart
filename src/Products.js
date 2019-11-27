import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";
import Cart from "./Cart";

class Products extends Component {
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

  render() {
    return (
      <div>
        {this.state.products.map(pr => (
          <li style={{ margin: 10, padding: 20 }}>
            {pr.title} - {pr.price}{" "}
            <button
              onClick={() =>
                this.props.changeHandler(pr.title, pr.price, pr.id)
              }
            >
              Add To cart
            </button>
          </li>
        ))}
        <Cart cart={this.state.cart} />{" "}
      </div>
    );
  }
}

export default Products;
