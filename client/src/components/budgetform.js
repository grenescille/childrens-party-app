import { useState } from 'react';

function BudgetForm() {
  const [length, setLength] = useState();
  const [invitations, setInvitations] = useState();
  const [hireVenue, setHireVenue] = useState();
  const [entertainer, setEntertainer] = useState();
  const [pa, setPa] = useState();
  const [partyBags, setPartyBags] = useState();
  const [cake, setCake] = useState();

  // invitation: Boolean,
  // partyLength: Number,
  // hireVenue: Boolean,
  // hireEntertainer: Boolean,
  // hirePA: Boolean,
  // partyBags: Boolean,
  // birthdayBanner: Boolean,
  // partyGames: Number,
  // cake: Boolean,

  return (
    <div>
      <form
        name="budget"
        className="form-create-budget"
        onSubmit={handleSubmit}
      >
        <p className="form-p">Send Invitations?</p>
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

        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </form>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({ ...state });

    setState({
      // childName: '',
      // parentName: '',
      // number: '',
    });
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
}

export default BudgetForm;
