import { Component } from 'react';
import Item from './Item';

class AllItems extends Component {
  render() {
    const { obj, onchange, section, inputProps } = this.props;
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
  }
}

export default AllItems;
