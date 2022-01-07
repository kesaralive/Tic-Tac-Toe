function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value === "X" ? <i className="fas fa-times ttc-txt-primary"></i> : null}
      {props.value === "O" ? <i className="fas fa-dot-circle ttc-txt-primary"></i> : null}
    </button>
  );
}
export default Square;
