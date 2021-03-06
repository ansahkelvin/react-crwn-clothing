import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CartDropDown from "../cart/cart-dropdown/CartDropDown";
import CartIcon from "../icon/cart-icon";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shops">
        SHOP
      </Link>

      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Link className="option" to="/signin">
        <CartIcon />
      </Link>
    </div>
    {hidden ? "" : <CartDropDown />}
  </div>
);
//Getting value from redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
