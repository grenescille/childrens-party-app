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
          textAlign: 'left',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        name="registration"
        className="form-create-party"
        onSubmit={handleSubmit}
      >
        <h3 className="form-h3" style={{ textAlign: 'center' }}>
          Add Children
        </h3>
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
          Child's Name
        </p>
        <input
          style={{
            height: '40px',
            width: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
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
          Parent's Name
        </p>
        <input
          style={{
            height: '40px',
            width: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
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
          Parent's Mobile Number
        </p>
        <input
          style={{
            height: '40px',
            width: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
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
        >
          Can child have dairy?
        </p>

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
          Can child eat nuts?
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
            marginLeft: 'auto',
            marginRight: 'auto',
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
