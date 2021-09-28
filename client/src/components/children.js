function Children(props) {
  return (
    <div
      style={{
        borderRadius: '10px',
        border: '2px solid grey',
        borderColor: 'black',
        margin: '15px',
        padding: '10px',
        // minWidth: '65%',
        maxWidth: '350px',
        backgroundColor: '#e6e6e6',
      }}
    >
      <h5 id="child-name">{props.childName} </h5>
    </div>
  );
}

export default Children;
