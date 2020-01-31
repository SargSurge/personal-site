/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

import Index from "views/Index.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// Sergio Perez
