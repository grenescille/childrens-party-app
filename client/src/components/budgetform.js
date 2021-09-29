import { useState } from 'react';
import { useEffect } from 'react';

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

  return (
    <div
      className="form-container"
      style={{
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left',
      }}
    >
      <form
        name="budget"
        className="form-create-budget"
        onSubmit={handleSubmit}
      >
        <p
          className="form-p"
          style={{
            height: '30px',
            textAlign: 'center',
            paddingTop: '8px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
        >
          Send invitations?
        </p>

        <div className="form-check">
          <label>
            <input
              onClick={() => setInvitations(true)}
              type="radio"
              name="invitations"
              value={true}
              className="form-check-input"
              checked={invitations === true}
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
        <p
          className="form-p"
          style={{
            height: '30px',
            textAlign: 'center',
            paddingTop: '8px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
        >
          Party length (hours)
        </p>
        <div className="form-check">
          <label>
            <input
              style={{ width: '300px' }}
              value={length}
              onChange={handlePartyLength}
              type="text"
              name="length"
              className="form-check-input"
            />
          </label>
        </div>
        <p
          className="form-p"
          style={{
            height: '30px',
            textAlign: 'center',
            paddingTop: '8px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
        >
          Hire venue?
        </p>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="venue"
              value={true}
              className="form-check-input"
              onClick={() => setHireVenue(true)}
              checked={hireVenue === true}
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
        <p
          className="form-p"
          style={{
            height: '30px',
            textAlign: 'center',
            paddingTop: '8px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
        >
          Hire entertainer?
        </p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setHireEntertainer(true)}
              type="radio"
              name="entertainer"
              className="form-check-input"
              checked={hireEntertainer === true}
            />
            Yes
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="entertainer"
              className="form-check-input"
              onClick={() => setHireEntertainer(false)}
            />
            No
          </label>
        </div>
        <p
          className="form-p"
          style={{
            height: '30px',
            textAlign: 'center',
            paddingTop: '8px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
        >
          Hire PA?
        </p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setHirePa(true)}
              type="radio"
              name="pa"
              value={true}
              className="form-check-input"
              checked={hirePa === true}
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
        <p
          className="form-p"
          style={{
            height: '30px',
            textAlign: 'center',
            paddingTop: '8px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
        >
          Party Bags?
        </p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setPartyBags(true)}
              type="radio"
              name="partybags"
              value={true}
              className="form-check-input"
              checked={partyBags === true}
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
        <p
          className="form-p"
          style={{
            height: '30px',
            textAlign: 'center',
            paddingTop: '8px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
        >
          Birthday Banner?
        </p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setBanner(true)}
              type="radio"
              name="banner"
              value={true}
              className="form-check-input"
              checked={banner === true}
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
        <p
          style={{
            height: '30px',
            textAlign: 'center',
            paddingTop: '8px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
          className="form-p"
        >
          How many party games?
        </p>
        <div className="form-check">
          <label>
            <input
              style={{ width: '300px' }}
              value={partyGames}
              onChange={handlePartyGames}
              type="text"
              name="partygames"
              className="form-check-input"
            />
          </label>
        </div>
        <p
          style={{
            height: '30px',
            textAlign: 'center',
            paddingTop: '8px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
          className="form-p"
        >
          Buy a cake?
        </p>
        <div className="form-check">
          <label>
            <input
              onClick={() => setCake(true)}
              type="radio"
              name="cake"
              value={true}
              className="form-check-input"
              checked={cake === true}
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
        <button
          className="button"
          type="submit"
          style={{
            height: '50px',
            width: '310px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
        >
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
    setInvitations(true);
    setHireVenue(true);
    setHireEntertainer(true);
    setHirePa(true);
    setPartyBags(true);
    setBanner(true);
    setPartyGames('');
    setCake(true);
    setPartyGames(0);
    setLength(0);
  }

  function handlePartyGames(e) {
    setPartyGames(e.target.value);
  }

  function handlePartyLength(e) {
    setLength(e.target.value);
  }
}

export default BudgetForm;
