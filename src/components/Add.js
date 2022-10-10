import { Component } from 'react';
import '../styles/Add.css';

class Add extends Component {
  render() {
    return (
      <button
        type="button"
        className="addButton"
        onClick={() => this.props.handleAddClick(this.props.section)}
      >
        <div>+</div>
      </button>
    );
  }
}

export default Add;
