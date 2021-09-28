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
        <h5>All children with allergies</h5>
        {props.allergies.map((child) => {
          return (
            <Children key={child._id} childName={child.childName}></Children>
          );
        })}
      </div>
      <div>
        <h5>All children with nut allergies</h5>
        {props.nutAllergies.map((child) => {
          return (
            <Children key={child._id} childName={child.childName}></Children>
          );
        })}
      </div>
      <div>
        <h5>All children with dairy allergies</h5>
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
