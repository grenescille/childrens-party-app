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
}

function createBudget(input) {
  fetch(baseURL + '/budget', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      invitation: input.invitation,
      partyLength: input.partyLength,
      hireVenue: input.hireVenue,
      hireEntertainer: input.hireEntertainer,
      hirePA: input.hirePA,
      partyBags: input.partyBags,
      birthdayBanner: input.birthdayBanner,
      partyGames: input.partyGames,
      cake: input.cake,
    }),
  });
}

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

export default Budget;
