import React from 'react';
import emoji from '../assets/partyfaceemoji.png';

const Home = () => {
  return (
    <>
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <h1>MVP Children's Party Planner!!!!</h1>
      </div>
      <div style={{ marginLeft: '140px', position: 'absolute' }}>
        <img src={emoji} alt="party face emoji" />
      </div>
    </>
  );
};
export default Home;
