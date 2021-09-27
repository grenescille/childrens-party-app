import './App.css';
import Form from './components/form';
import Attendees from './components/attendees';
import { useState, useEffect } from 'react';

function App() {
  const baseURL = 'http://localhost:3001';

  const [party, setParty] = useState([]);

  useEffect(() => {
    invitedChildren();
  }, [party]);

  function invitedChildren() {
    fetch(baseURL + '/party').then((response) => {
      if (!response.ok) {
        throw Error('Error fetching the invited children');
      }
      return response
        .json()
        .then((data) => {
          setParty(data);
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  function addChild(input) {
    fetch(baseURL + '/party', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        childName: input.childName,
        parentName: input.parentName,
        number: input.number,
        dairy: input.dairy,
        nuts: input.nuts,
      }),
    }).then(invitedChildren());
  }

  return (
    <>
      <div>
        <Form onSubmit={addChild} />
      </div>
      <div>
        {party.map((child) => {
          return (
            <Attendees key={child._id} childName={child.childName}></Attendees>
          );
        })}
      </div>
    </>
  );
}

export default App;
