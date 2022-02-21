import React from "react";
import { HomePage } from "./pages/home/Homepage";
import ShopPage from "./pages/shop/shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shops" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
