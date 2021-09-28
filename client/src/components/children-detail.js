function ChildrenDetail(props) {
  return (
    <div
      style={{
        borderRadius: '10px',
        border: '2px solid grey',
        borderColor: 'black',
        margin: '15px',
        paddingLeft: '20px',
        maxWidth: '25%',
        minWidth: '35%',
        backgroundColor: '#d9d9d9',
      }}
    >
      <h4 id="child-name">Child's name: {props.childName} </h4>
      <h4 id="child-name">Parent's name: {props.parentName} </h4>
      <h4 id="child-name">Mobile number: {props.number} </h4>
    </div>
  );
}

export default ChildrenDetail;
