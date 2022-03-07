import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../button/custom-button";
import CartItem from "../../cart-item/CartItem";

import "./cart-dropdown.styles.scss";

function CartDropDown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
