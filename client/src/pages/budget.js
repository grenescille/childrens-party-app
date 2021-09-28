import BudgetForm from '../components/budgetform';
import baseURL from '../utils/basurl';
import { useState } from 'react';

function Budget() {
  const [budget, setBudget] = useState();
  return (
    <>
      <div>
        <BudgetForm onSubmit={createBudget} />
      </div>
    </>
  );

  function createBudget(input) {
    console.log('input ', input);
    fetch(baseURL + '/budget', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        invitation: input.invitations,
        partyLength: input.length,
        hireVenue: input.hireVenue,
        hireEntertainer: input.hireEntertainer,
        hirePa: input.hirePa,
        partyBags: input.partyBags,
        birthdayBanner: input.banner,
        partyGames: input.partyGames,
        cake: input.cake,
      }),
    });
  }

  // "invitation": true,
  // "hireVenue": true,
  // "hireEntertainer": true,
  // "partyBags": true,
  // "birthdayBanner": true,
  // "cake": true,
  // "__v": 0

  function fetchBudget() {
    fetch(baseURL + '/budget').then((response) => {
      if (!response.ok) {
        throw Error('Error fetching the budget');
      }
      return response
        .json()
        .then((data) => {
          setBudget(data);
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }
}

export default Budget;
