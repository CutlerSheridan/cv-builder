import { Component } from 'react';

class Add extends Component {
  render() {
    return (
      <button
        type="button"
        className="addButton"
        onClick={() => this.props.handleAddClick(this.props.section)}
      >
        <div>add</div>
      </button>
    );
  }
}

export default Add;
