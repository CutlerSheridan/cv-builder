import '../styles/Add.css';

const Add = (props) => {
  return (
    <button
      type="button"
      className="addButton"
      onClick={() => props.handleAddClick(props.section)}
    >
      <div>+</div>
    </button>
  );
};

export default Add;
