import BudgetForm from '../components/budgetform';
import baseURL from '../utils/basurl';
import { useState } from 'react';

function Budget(props) {
  const [lastBudget, setLastBudget] = useState({});
  return (
    <>
      <div
        className="budget-page-wrapper"
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        <div
          className="budget-form-wrapper"
          style={{
            maxHeight: '1250px',
            textAlign: 'center',
            borderRadius: '10px',
            border: '2px solid grey',
            borderColor: 'black',
            margin: '15px',
            padding: '10px',
            maxWidth: '340px',
            minWidth: '31%',
            justifyContent: 'center',
          }}
        >
          <BudgetForm onSubmit={createBudget} />
        </div>
        <div>
          <h5 id="totalBudget-text">TOTAL COST</h5>
          <h1 id="totalBudgetCost-text">
            £{budgetCalculator(props, lastBudget)}
          </h1>
        </div>
      </div>
    </>
  );

  function createBudget(input) {
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
    }).then(fetchBudget);
  }

  function fetchBudget() {
    fetch(baseURL + '/budget').then((response) => {
      if (!response.ok) {
        throw Error('Error fetching the budget');
      }
      return response
        .json()
        .then((data) => {
          const lastBudget = data[data.length - 1];
          setLastBudget(lastBudget);
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  function budgetCalculator(props, lastBudget) {
    const totalCostsArr = [];
    const totalChildren = props.party.length;
    const pizzaCost = 3 * (totalChildren / 4);
    const crispsCost = 2 * (totalChildren / 6);
    const sausageRollsCost = 1.75 * (totalChildren / 5);
    const squashCost = 2.5;
    const coffeeCost = 3.5;
    const teaCost = 3;
    const milkCost = 1;
    const wineForAdultsCost = 7 * (totalChildren / 3);
    const biscuitsCost = 1.6 * (totalChildren / 10);

    if (lastBudget.partyLength === 0) return 0;

    if (lastBudget.invitation) {
      totalCostsArr.push(3 * totalChildren);
    }
    if (lastBudget.hireVenue) {
      totalCostsArr.push(13 * lastBudget.partyLength);
    }
    if (lastBudget.hireEntertainer) {
      totalCostsArr.push(150);
    }
    if (lastBudget.hirePa) {
      totalCostsArr.push(20);
    }
    if (lastBudget.partyBags) {
      totalCostsArr.push(1 * totalChildren);
    }
    if (lastBudget.birthdayBanner) {
      totalCostsArr.push(5);
    }
    if (lastBudget.partyGames > 0) {
      totalCostsArr.push(1.99 * lastBudget.partyGames);
    }
    if (lastBudget.cake) {
      totalCostsArr.push(50);
    }

    totalCostsArr.push(
      pizzaCost,
      crispsCost,
      sausageRollsCost,
      squashCost,
      coffeeCost,
      teaCost,
      milkCost,
      wineForAdultsCost,
      biscuitsCost
    );

    const totalCost = totalCostsArr.reduce((acc, item) => {
      return (acc += item);
    });

    if (!isNaN(totalCost)) {
      return totalCost.toFixed(2);
    } else return 0;
  }
}

export default Budget;
