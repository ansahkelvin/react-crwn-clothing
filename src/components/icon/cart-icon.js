import React from "react";
import shoppingIcon from "./../../assets/shopping-bag.svg";
import { toggleCartHidden } from "./../../redux/cart/cart-action";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <img src={shoppingIcon} alt="cart" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden(dispatch)),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
