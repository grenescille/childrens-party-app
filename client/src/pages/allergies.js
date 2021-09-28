import React from 'react';
import Children from '../components/children';
import { useEffect } from 'react';

function Allergies(props) {
  useEffect(() => {
    props.allergiesChildren();
    props.noNutsChildren();
    props.noDairyChildren();
  }, []);

  return (
    <>
      <div>
        <h2 style={{ margin: '25px', padding: '10px' }}>
          All children with allergies
        </h2>
        {props.allergies.map((child) => {
          return (
            <Children key={child._id} childName={child.childName}></Children>
          );
        })}
      </div>
      <div>
        <h2 style={{ margin: '25px', padding: '10px' }}>
          All children with nut allergies
        </h2>
        {props.nutAllergies.map((child) => {
          return (
            <Children key={child._id} childName={child.childName}></Children>
          );
        })}
      </div>
      <div>
        <h2 style={{ margin: '25px', padding: '10px' }}>
          All children with dairy allergies
        </h2>
        {props.dairyAllergies.map((child) => {
          return (
            <Children key={child._id} childName={child.childName}></Children>
          );
        })}
      </div>
    </>
  );
}

export default Allergies;
