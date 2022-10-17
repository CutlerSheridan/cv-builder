import '../styles/Item.css';

const Item = (props) => {
  const { obj, onchange, section, prop } = props;
  let inputBox;
  if (prop !== 'description') {
    inputBox = (
      <input
        id={`${prop}_${obj.id}`}
        data-id={obj.id}
        onChange={(e) => onchange(e, section, prop)}
        value={obj[prop]}
      ></input>
    );
  } else {
    inputBox = (
      <textarea
        id={`${prop}_${obj.id}`}
        data-id={obj.id}
        onChange={(e) => onchange(e, section, prop)}
        value={obj[prop]}
        rows="3"
      ></textarea>
    );
  }
  return (
    <div className={`item-container-edit item-${prop}-edit`}>
      <label htmlFor={`${prop}_${obj.id}`}>
        {prop !== 'skillName' ? prop : 'skill'}:
      </label>
      {inputBox}
    </div>
  );
};

export default Item;
