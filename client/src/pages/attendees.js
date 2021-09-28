import React from 'react';
import ChildrenDetail from '../components/children-detail';

function Attendees(props) {
  return (
    <div>
      {props.party.map((child) => {
        return (
          <ChildrenDetail
            key={child._id}
            childName={child.childName}
            parentName={child.parentName}
            number={child.number}
          ></ChildrenDetail>
        );
      })}
    </div>
  );
}

export default Attendees;
