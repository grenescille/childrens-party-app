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
  const [allergies, setAllergies] = useState([]);
  const [nutAllergies, setNutAllergies] = useState([]);
  const [dairyAllergies, setDairyAllergies] = useState([]);

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

  function allergiesChildren() {
    fetch(baseURL + '/nonutsordairy').then((response) => {
      if (!response.ok) {
        throw Error('Error fetching the children with allergies');
      }
      return response
        .json()
        .then((data) => {
          setAllergies(data);
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  function noNutsChildren() {
    fetch(baseURL + '/nonuts').then((response) => {
      if (!response.ok) {
        throw Error('Error fetching the children with nut allergies');
      }
      return response
        .json()
        .then((data) => {
          setNutAllergies(data);
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  function noDairyChildren() {
    fetch(baseURL + '/nodairy').then((response) => {
      if (!response.ok) {
        throw Error('Error fetching the children with nut allergies');
      }
      return response
        .json()
        .then((data) => {
          setDairyAllergies(data);
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
        <Route
          path="/addchild"
          render={() => (
            <AddChildForm party={party} invitedChildren={invitedChildren} />
          )}
        />
        <Route
          path="/attendees"
          render={() => (
            <Attendees party={party} invitedChildren={invitedChildren} />
          )}
        />
        <Route
          path="/allergies"
          render={() => (
            <Allergies
              allergies={allergies}
              allergiesChildren={allergiesChildren}
              nutAllergies={nutAllergies}
              noNutsChildren={noNutsChildren}
              dairyAllergies={dairyAllergies}
              noDairyChildren={noDairyChildren}
            />
          )}
        />
        <Route path="/budget" render={() => <Budget party={party} />} />
      </Switch>
    </Router>
  );
}

export default App;
