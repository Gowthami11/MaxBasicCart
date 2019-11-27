import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";

class Cart extends Component {
  render() {
    console.log("cart props", this.props.cart);
    //const { title, price } = this.props.cart;
    return (
      <div>
        {this.props.cart.map((ct, id) => (
          <li>
            {ct.title} {ct.price} ({ct.quantity})
            <button onClick={this.props.deleter.bind(this, id)}>
              Remove From Cart
            </button>
          </li>
        ))}

        <h3>
          total no items in the cart:{" "}
          {this.props.cart.reduce((count, ar) => ar.quantity + count, 0)}
        </h3>
      </div>
    );
  }
}

Cart.defaultProps = {
  cart: [{ title: "hi", price: 200 }]
};

export default Cart;
