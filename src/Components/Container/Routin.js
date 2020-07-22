import React from "react";
import { BrowserRouter as Ruter, Route, Switch } from "react-router-dom";

import LoginFomr from "../Auth/LoginForm";
import Advisor from "../Auth/AdvisorList";

const Routin = () => {
  return (
    <Ruter>
      <Switch>
        <Route exact path="/" component={LoginFomr} />
        <Route exact path="/advisor" component={Advisor} />
      </Switch>
    </Ruter>
  );
};

export default Routin;
