import Item from './Item';

const AllItems = (props) => {
  const { obj, onchange, section, inputProps } = props;
  return (
    <div className={`${section === 'contact' ? '' : 'items-container-edit'}`}>
      {inputProps.map((p) => {
        return (
          <Item
            obj={obj}
            onchange={onchange}
            section={section}
            prop={p}
            key={`${p}_${obj.id}`}
          ></Item>
        );
      })}
    </div>
  );
};

export default AllItems;
