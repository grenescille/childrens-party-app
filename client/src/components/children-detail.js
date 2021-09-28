function ChildrenDetail(props) {
  return (
    <div
      style={{
        borderRadius: '10px',
        border: '2px solid grey',
        borderColor: 'black',
        margin: '10px',
        padding: '10px',
        maxWidth: '25%',
        minWidth: '25%',
      }}
    >
      <h4 id="child-name">Child's name: {props.childName} </h4>
      <h4 id="child-name">Parent's name: {props.parentName} </h4>
      <h4 id="child-name">Mobile number: {props.number} </h4>
    </div>
  );
}

export default ChildrenDetail;
