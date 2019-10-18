import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Importing local components
import Navbar from "./components/navbar/Navbar.js";
import Landig from "./components/landing/Landing.js";
import UserRegistration from "./components/userRegistration/UserRegistration";
import HutRegistration from "./components/HutRegistration/HutRegistration";
import UserDashboard from "./components/userDashboard/UserDashboard";
import DisplayHuts from "./components/displayHuts/DisplayHuts";
import DataContextProvider from "./contexts/dataContext";

//Importing local files
import "./App.css";

function App() {
  return (
    <Router>
      <DataContextProvider>
        <Navbar />
        <Switch>
          <Route path="/" component={Landig} exact={true} />
          <Route path="/userRegistration" component={UserRegistration} />
          <Route path="/registerHut" component={HutRegistration} />
          <Route path="/userDashboard" component={UserDashboard}></Route>
          <Route path="/myUnit" component={DisplayHuts}></Route>
        </Switch>
      </DataContextProvider>
    </Router>
  );
}

export default App;
