import Form from '../components/form';
import Children from '../components/children';

import { useState, useEffect } from 'react';
import baseURL from '../utils/basurl';

function AddChildForm(props) {
  useEffect(() => {
    props.invitedChildren();
  }, [props.party]);

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
    }).then(props.invitedChildren());
  }

  return (
    <div>
      <div
        style={{
          display: 'block',
          textAlign: 'center',
          borderRadius: '10px',
          border: '2px solid grey',
          borderColor: 'black',
          margin: '20px',
          padding: '10px',
          maxWidth: '340px',
          minWidth: '35%',
          justifyContent: 'center',
        }}
      >
        <Form onSubmit={addChild} />
      </div>
      <h3 style={{ margin: '30px' }}>Children Attending</h3>
      <div>
        {props.party.map((child) => {
          return (
            <Children key={child._id} childName={child.childName}></Children>
          );
        })}
      </div>
    </div>
  );
}
export default AddChildForm;
