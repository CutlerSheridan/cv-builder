import '../styles/Remove.css';

const Remove = (props) => {
  return (
    <button
      type="button"
      className="removeButton"
      onClick={(e) => props.handleRemoveClick(props.objId)}
    >
      <div>X</div>
    </button>
  );
};

export default Remove;
