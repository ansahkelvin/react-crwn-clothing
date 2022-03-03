import React from "react";
import shoppingIcon from "./../../assets/shopping-bag.svg";
import { toggleCartHidden } from "./../../redux/cart/cart-action";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <img src={shoppingIcon} alt="cart" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden(dispatch)),
});

export default connect(null, mapDispatchToProps)(CartIcon);
