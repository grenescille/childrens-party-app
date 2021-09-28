import BudgetForm from '../components/budgetform';
import baseURL from '../utils/basurl';
import { useState } from 'react';
import { FlexFlowContext } from 'twilio/lib/rest/flexApi/v1/flexFlow';

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
    const totalChildren = props.party.length;
    const invitationsCost = 3 * totalChildren;
    const hireVenueCost = 13 * lastBudget.partyLength;
    const entertainerCost = 150;
    const hirePaCost = 20;
    const partyBagsCost = 1 * totalChildren;
    const bannerCost = 5;
    const prizesCost = 1.99 * lastBudget.partyGames;
    const cakeCost = 50;
    const pizzaCost = 3 * (totalChildren / 4);
    const crispsCost = 2 * (totalChildren / 6);
    const sausageRollsCost = 1.75 * (totalChildren / 5);
    const squashCost = 2.5;
    const coffeeCost = 3.5;
    const teaCost = 3;
    const milkCost = 1;
    const wineForAdultsCost = 7 * (totalChildren / 3);
    const biscuitsCost = 1.6 * (totalChildren / 10);

    const totalCostsArr = [
      invitationsCost,
      hireVenueCost,
      entertainerCost,
      hirePaCost,
      partyBagsCost,
      bannerCost,
      prizesCost,
      cakeCost,
      pizzaCost,
      crispsCost,
      sausageRollsCost,
      squashCost,
      coffeeCost,
      teaCost,
      milkCost,
      wineForAdultsCost,
      biscuitsCost,
    ];

    const totalCost = totalCostsArr.reduce((acc, item) => {
      return (acc += item);
    });

    if (!isNaN(totalCost)) {
      return totalCost.toFixed(2);
    } else return 0;
  }
}

export default Budget;
