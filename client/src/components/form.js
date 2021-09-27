import { useState } from 'react';

function Form(props) {
  const [state, setState] = useState({
    childName: '',
    parentName: '',
    telNumber: '',
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
        <input
          className="form-dairy"
          name="dairy"
          type="text"
          value={state.dairy}
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
        <p className="form-p">PARENT'S NUMBER</p>
        <input
          className="form-number"
          name="number"
          type="text"
          value={state.number}
          onChange={handleChange}
          required
        />
        <button className="button" type="submit">
          CREATE
        </button>
      </form>
    </div>
  );
  function handleSubmit(e) {
    e.preventDefault();
    // props.onSubmit(state);
    // setState({
    //   title: '',
    //   date: state.date,
    //   venue: '',
    // });
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
}
export default Form;
