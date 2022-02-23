import React from "react";
import "./authentication.scss";

import SignIn from "../../components/sign-in/Sign-In";
import Signup from "../../components/sign-up/signup";

const AuthenticationPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <Signup/>
  </div>
);

export default AuthenticationPage;
