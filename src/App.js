import React from "react";
import { HomePage } from "./pages/home/Homepage";
import ShopPage from "./pages/shop/shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import AuthenticationPage from "./pages/authentication/authentication";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shops" component={ShopPage} />
          <Route path="/signin" component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
