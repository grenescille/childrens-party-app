import React from 'react';
import Children from '../components/children';

function Attendees(props) {
  console.log('props ', props);
  return (
    <div>
      {props.party.map((child) => {
        return (
          console.log('child.childName ', child.childName),
          (<Children key={child._id} childName={child.childName}></Children>)
        );
      })}
    </div>
  );
}

export default Attendees;
