import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Information from "./components/Information";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Information} />
      <Route
        path="/case/:userId/:name"
        name="Information"
        component={Information}
      />
      <Route path="/App/data" component={Information} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
