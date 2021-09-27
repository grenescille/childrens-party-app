import './App.css';
import Form from './components/form';
import { useState, useEffect } from 'react';

function App() {
  const baseURL = 'http://localhost:3001';

  return (
    <>
      <div>
        <p>Hello World!</p>
      </div>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
