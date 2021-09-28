function ChildrenDetail(props) {
  return (
    <div>
      <h5 id="child-name">Child's name: {props.childName} </h5>
      <h5 id="child-name">Parent's name: {props.parentName} </h5>
      <h5 id="child-name">Mobile number: {props.number} </h5>
    </div>
  );
}

export default ChildrenDetail;
