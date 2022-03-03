import React from "react";
import { HomePage } from "./pages/home/Homepage";
import ShopPage from "./pages/shop/shop";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header";
import { setCurrentUser } from "./redux/user/user-action";
import AuthenticationPage from "./pages/authentication/authentication";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import "./App.css";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shops" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <AuthenticationPage></AuthenticationPage>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
