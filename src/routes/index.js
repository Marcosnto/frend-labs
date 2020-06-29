import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import User from "../pages/User";

function Routes() {
  return ( 
    <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/user" component = {User} />
    </Switch>

  );
}

export default Routes;
