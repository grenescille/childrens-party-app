import { useState } from 'react';

function Form(props) {
  const [state, setState] = useState({
    childName: '',
    parentName: '',
    number: '',
    dairy: '',
    nuts: '',
    confirmed: '',
  });

  return (
    <div className="form-container">
      <form className="form-create-party" onSubmit={handleSubmit}>
        <h3 className="form-h3">Create a new party</h3>
        <p className="form-p">CHILD'S NAME</p>
        <input
          className="form-childName"
          type="text"
          name="childName"
          value={state.childName}
          onChange={handleChange}
          required
        />
        <p className="form-p">PARENT'S NAME</p>
        <input
          className="form-parentName"
          name="parentName"
          type="text"
          value={state.parentName}
          onChange={handleChange}
          required
        />
        <p className="form-p">PARENT'S NUMBER</p>
        <input
          className="form-number"
          name="number"
          type="text"
          value={state.number}
          onChange={handleChange}
          required
        />
        <p className="form-p">EAT DAIRY?</p>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="dairy"
              value={(state.dairy = true)}
              checked={true}
              className="form-check-input"
            />
            Yes
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="dairy"
              value={(state.dairy = false)}
              checked={true}
              className="form-check-input"
            />
            No
          </label>
        </div>
        <p className="form-p">EAT NUTS?</p>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="nuts"
              value={(state.nuts = true)}
              checked={true}
              className="form-check-input"
            />
            Yes
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="nuts"
              value={(state.nuts = false)}
              checked={true}
              className="form-check-input"
            />
            No
          </label>
        </div>

        <button className="button" type="submit">
          CREATE
        </button>
      </form>
    </div>
  );
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(state);

    setState({
      childName: '',
      parentName: '',
      number: '',
      dairy: Boolean,
      nuts: Boolean,
      confirmed: '',
    });
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
}
export default Form;
