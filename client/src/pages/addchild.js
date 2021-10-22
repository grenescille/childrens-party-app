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
    <div
      className="addchild-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <div
        className="form-wrapper"
        style={{
          maxHeight: '750px',
          textAlign: 'left',
          borderRadius: '10px',
          border: '2px solid grey',
          borderColor: 'black',
          margin: '15px',
          padding: '10px',
          maxWidth: '340px',
          minWidth: '31%',
          justifyContent: 'center',
        }}
      >
        <Form onSubmit={addChild} />
      </div>
      <div
        className="children-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          maxHeight: '700px',
        }}
      >
        <div
          className="children"
          style={{ maxHeight: '700px', minWidth: '300px', maxWidth: '300px' }}
        >
          {props.party.map((child) => {
            return (
              <Children key={child._id} childName={child.childName}></Children>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default AddChildForm;
