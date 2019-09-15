import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Importing local components
import Navbar from './components/Navbar';
import Landig from './components/Landing';
import UserRegistration from './components/UserRegistration';
import HutRegistration from "./components/HutRegistration"

//Importing local files
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Landig} exact={true} />
        <Route path="/userRegistration" component={UserRegistration} />
        <Route path="/registerHut" component={HutRegistration} />
      </Switch>
    </Router>
  )
}

export default App;
