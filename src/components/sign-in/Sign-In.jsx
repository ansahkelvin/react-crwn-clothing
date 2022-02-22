import React from "react";

import InputForm from "./../Form/input-form";
import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEvent = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have An Account</h2>
        <span> Sign in with your email and password</span>
        <form action="" method="post">
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
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
