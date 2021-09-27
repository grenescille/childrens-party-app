import React from 'react';
import Children from '../components/children';

function Attendees(props) {
  <div>
    {props.party.map((child) => {
      return <Children key={child._id} childName={child.childName}></Children>;
    })}
  </div>;
}

export default Attendees;
