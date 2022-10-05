import { Component } from 'react';
import '../styles/Item.css';

class Item extends Component {
  render() {
    const { obj, onchange, section, prop } = this.props;
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
        ></textarea>
      );
    }
    return (
      <div className={`item-container-edit item-${prop}-edit`}>
        <label htmlFor={`${prop}_${obj.id}`}>{prop}:</label>
        {inputBox}
      </div>
    );
  }
}

export default Item;
