import './App.css';
import Form from './components/form';
import { useState, useEffect } from 'react';

function App() {
  const baseURL = 'http://localhost:3001';

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
    });
  }

  return (
    <>
      <div>
        <Form onSubmit={addChild} />
      </div>
    </>
  );
}

export default App;
