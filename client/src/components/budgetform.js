import { useState } from 'react';

function BudgetForm(props) {
  const [length, setLength] = useState('');
  const [invitations, setInvitations] = useState(true);
  const [hireVenue, setHireVenue] = useState(true);
  const [hireEntertainer, setHireEntertainer] = useState(true);

  const [hirePa, setHirePa] = useState(true);
  const [partyBags, setPartyBags] = useState(true);
  const [banner, setBanner] = useState(true);
  const [partyGames, setPartyGames] = useState('');
  const [cake, setCake] = useState(true);

  const [state, setState] = useState({
    childName: '',
    parentName: '',
    number: '',
  });

  return (
    <div className="form-container">
      <form
        name="budget"
        className="form-create-budget"
        onSubmit={handleSubmit}
      >
        <p className="form-p">Send invitations?</p>

        <div className="form-check">
          <label>
            <input
              onClick={() => setInvitations(true)}
              type="radio"
              name="invitations"
              value={true}
              className="form-check-input"
            />
            Yes
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="invitations"
              value={false}
              className="form-check-input"
              onClick={() => setInvitations(false)}
            />
            No
          </label>
        </div>
        <p className="form-p">Party length (hours)</p>
        <div className="form-check">
          <label>
            <input
              value={length}
              onChange={handlePartyLength}
              type="text"
              name="length"
              className="form-check-input"
            />
          </label>
        </div>
        <p className="form-p">Hire venue?</p>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="venue"
              value={true}
              className="form-check-input"
              onClick={() => setHireVenue(true)}
            />
            Yes
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="venue"
              value={false}
              className="form-check-input"
              onClick={() => setHireVenue(false)}
            />
            No
          </label>
        </div>
        <p className="form-p">Hire entertainer?</p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setHireEntertainer(true)}
              type="radio"
              name="entertainer"
              value={true}
              className="form-check-input"
            />
            Yes
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="entertainer"
              value={false}
              className="form-check-input"
              onClick={() => setHireEntertainer(false)}
            />
            No
          </label>
        </div>
        <p className="form-p">Hire PA?</p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setHirePa(true)}
              type="radio"
              name="pa"
              value={true}
              className="form-check-input"
            />
            Yes
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="pa"
              value={false}
              className="form-check-input"
              onClick={() => setHirePa(false)}
            />
            No
          </label>
        </div>
        <p className="form-p">Party Bags?</p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setPartyBags(true)}
              type="radio"
              name="partybags"
              value={true}
              className="form-check-input"
            />
            Yes
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="partybags"
              value={false}
              className="form-check-input"
              onClick={() => setPartyBags(false)}
            />
            No
          </label>
        </div>
        <p className="form-p">Birthday Banner?</p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setBanner(true)}
              type="radio"
              name="banner"
              value={true}
              className="form-check-input"
            />
            Yes
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="banner"
              value={false}
              className="form-check-input"
              onClick={() => setBanner(false)}
            />
            No
          </label>
        </div>
        <p className="form-p">How many party games?</p>
        <div className="form-check">
          <label>
            <input
              value={partyGames}
              onChange={handlePartyGames}
              type="text"
              name="partygames"
              className="form-check-input"
            />
          </label>
        </div>
        <p className="form-p">Buy a cake?</p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setCake(true)}
              type="radio"
              name="cake"
              value={true}
              className="form-check-input"
            />
            Yes
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="cake"
              value={false}
              className="form-check-input"
              onClick={() => setCake(false)}
            />
            No
          </label>
        </div>
        <button className="button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      invitations,
      length: Number(length),
      hireVenue,
      hireEntertainer,
      hirePa,
      partyBags,
      banner,
      partyGames: Number(partyGames),
      cake,
    });

    setLength('');
    setInvitations(false);
    setHireVenue(false);
    setHireEntertainer(false);
    setHirePa(false);
    setPartyBags(false);
    setBanner(false);
    setPartyGames('');
    setCake(false);
  }

  function handlePartyGames(e) {
    setPartyGames(e.target.value);
  }

  function handlePartyLength(e) {
    setLength(e.target.value);
  }
}

export default BudgetForm;
