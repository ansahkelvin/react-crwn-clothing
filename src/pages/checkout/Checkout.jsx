import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/Checkout-Item";

import "./checkout.styles.scss";

function CheckOut({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span> Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span className="total">Total: ${total}</span>
      </div>
    </div>
  );
}

const mapToStateProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemTotal,
});

export default connect(mapToStateProps)(CheckOut);
