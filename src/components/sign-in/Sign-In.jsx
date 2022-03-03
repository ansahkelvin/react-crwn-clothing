import React from "react";

import InputForm from "./../Form/input-form";
import CustomButton from "../button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      console.log(auth.currentUser);
    } catch (e) {
      alert(e.message);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I Already Have An Account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <InputForm
            type="email"
            name="email"
            id="email"
            handleChange={this.handleChange}
            required
            label="email"
            value={this.state.email}
          />

          <InputForm
            type="password"
            name="password"
            id="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
            label="password"
          />
          <div className="buttons">
            <CustomButton onClick={this.handleSubmit} type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
