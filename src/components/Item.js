import { Component } from 'react';
import '../styles/Item.css';

class Item extends Component {
  render() {
    const { item, onchange, section, prop } = this.props;
    return (
      <div className="item-container-edit">
        <label htmlFor={item.id}>{prop}:</label>
        <input
          id={item.id}
          onChange={(e) => onchange(e, section, prop)}
          value={item[prop]}
        ></input>
      </div>
    );
  }
}

export default Item;
