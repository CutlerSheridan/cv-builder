import { Component } from 'react';
import '../styles/Item.css';

class Item extends Component {
  render() {
    const { obj, onchange, section, prop } = this.props;
    return (
      <div className="item-container-edit">
        <label htmlFor={`${prop}_${obj.id}`}>{prop}:</label>
        <input
          id={`${prop}_${obj.id}`}
          data-id={obj.id}
          onChange={(e) => onchange(e, section, prop)}
          value={obj[prop]}
        ></input>
      </div>
    );
  }
}

export default Item;
