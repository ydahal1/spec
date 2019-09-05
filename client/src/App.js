import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar';
import Landig from './components/Landing';
import UserRegistration from './components/UserRegistration';
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Landig} exact={true} />
        <Route path="/userRegistration" component={UserRegistration} />
      </Switch>
    </Router>
  )}

export default App;
