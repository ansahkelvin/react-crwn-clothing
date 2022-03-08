import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../../redux/cart/cart.selector";
import CustomButton from "../../button/custom-button";
import CartItem from "../../cart-item/CartItem";

import "./cart-dropdown.styles.scss";

function CartDropDown({ cartItems, history }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")} >GO TO CHECKOUT</CustomButton>
    </div>
  );
}
//Passing in the cart item selector

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
