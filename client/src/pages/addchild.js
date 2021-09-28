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
    <div className="addChildWrapper">
      <div>
        <Form onSubmit={addChild} />
      </div>
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
