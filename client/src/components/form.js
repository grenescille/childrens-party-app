import { useState } from 'react';

function Form(props) {
  const [state, setState] = useState({
    childName: '',
    parentName: '',
    number: '',
  });

  const [nuts, setNuts] = useState();
  const [dairy, setDairy] = useState();

  return (
    <div className="form-container">
      <form
        style={{
          display: 'inline-block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
        name="registration"
        className="form-create-party"
        onSubmit={handleSubmit}
      >
        <h3 className="form-h3">Add Children</h3>
        <p className="form-p">Child's Name</p>
        <input
          style={{
            height: '40px',
            width: '300px',
            marginLeft: '40px',
            marginRight: '40px',
            marginBottom: '10px',
            border: '1px solid #e9e6e6e2',
          }}
          className="form-childName"
          type="text"
          name="childName"
          value={state.childName}
          onChange={handleChange}
          required
        />
        <p className="form-p">Parent's Name</p>
        <input
          style={{
            height: '40px',
            width: '300px',
            marginLeft: '40px',
            marginRight: '40px',
            marginBottom: '10px',
            border: '1px solid #e9e6e6e2',
          }}
          className="form-parentName"
          name="parentName"
          type="text"
          value={state.parentName}
          onChange={handleChange}
          required
        />
        <p className="form-p">Parent's Number</p>
        <input
          style={{
            height: '40px',
            width: '300px',
            marginLeft: '40px',
            marginRight: '40px',
            marginBottom: '10px',
            border: '1px solid #e9e6e6e2',
          }}
          className="form-number"
          name="number"
          type="text"
          value={state.number}
          onChange={handleChange}
          required
        />
        <p className="form-p">Eat Dairy?</p>

        <div className="form-check">
          <label>
            <input
              onClick={() => setDairy(true)}
              type="radio"
              name="dairy"
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
              name="dairy"
              value={false}
              className="form-check-input"
              onClick={() => setDairy(false)}
            />
            No
          </label>
        </div>
        <p
          style={{
            height: '40px',
            width: '300px',
            marginLeft: '40px,',
            marginRight: '40px',
            marginBottom: '10px',
            border: '1px solid #e9e6e6e2',
          }}
        >
          Eat Nuts?
        </p>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="nuts"
              value={true}
              className="form-check-input"
              onClick={() => setNuts(true)}
            />
            Yes
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="nuts"
              value={false}
              className="form-check-input"
              onClick={() => setNuts(false)}
            />
            No
          </label>
        </div>

        <button
          style={{
            height: '50px',
            width: '310px',
            marginLeft: '40px',
            marginRight: '40px',
            backgroundColor: '#ffa45c',
            borderRadius: '4px',
            border: '1px black',
            marginTop: '20px',
          }}
          type="submit"
        >
          ADD CHILD
        </button>
      </form>
    </div>
  );
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({ ...state, nuts, dairy });

    setState({
      childName: '',
      parentName: '',
      number: '',
    });
    setNuts(false);
    setDairy(false);
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
}
export default Form;
