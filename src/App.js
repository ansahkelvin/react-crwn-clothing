import React from "react";
import { HomePage } from "./pages/home/Homepage";
import ShopPage from "./pages/shop/shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import AuthenticationPage from "./pages/authentication/authentication";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shops" component={ShopPage} />
        <Route path="/sign-in" component={AuthenticationPage}/>
      </Switch>
    </div>
  );
}

export default App;
