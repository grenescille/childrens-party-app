import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import AddChildForm from './pages/addchild';
import Attendees from './pages/attendees';
import Allergies from './pages/allergies';
import Budget from './pages/budget';
import baseURL from './utils/basurl';

import { useState, useEffect } from 'react';

function App() {
  const [party, setParty] = useState([]);

  useEffect(() => {
    invitedChildren();
  }, []);

  function invitedChildren() {
    fetch(baseURL + '/party').then((response) => {
      if (!response.ok) {
        throw Error('Error fetching the invited children');
      }
      return response
        .json()
        .then((data) => {
          setParty(data);
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addchild" component={AddChildForm} />
        <Route path="/attendees" render={() => <Attendees party={party} />} />
        <Route path="/allergies" component={Allergies} />
        <Route path="/budget" component={Budget} />
      </Switch>
    </Router>
  );
}

export default App;
