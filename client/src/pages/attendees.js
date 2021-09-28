import React from 'react';
import ChildrenDetail from '../components/children-detail';
import styles from './attendees.css';

function Attendees(props) {
  return (
    <>
      <h1 style={{ margin: '15px', padding: '10px' }}>Children Attending</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
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
    </>
  );
}

export default Attendees;
