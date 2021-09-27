import { useState } from 'react';

function Form(props) {
  const [state, setState] = useState({
    childName: '',
    parentName: '',
    number: '',
    dairy: true,
    nuts: false,
    // confirmed: '',
  });

  return (
    <div className="form-container">
      <form
        name="registration"
        className="form-create-party"
        onSubmit={handleSubmit}
      >
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
              onClick={() => handleChange}
              type="radio"
              name="dairy"
              value={true}
              // checked={true}
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
              value={false}
              // checked={true}
              className="form-check-input"
              onChange={handleChange}
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
              value={true}
              // checked={true}
              className="form-check-input"
              onChange={handleChange}
            />
            Yes
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="nuts"
              value={false}
              // checked={true}
              className="form-check-input"
              onChange={handleChange}
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
    let frm = document.getElementsByName('registration')[0];
    frm.reset();

    setState({
      childName: '',
      parentName: '',
      number: '',
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
