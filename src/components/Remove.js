import { Component } from 'react';

class Remove extends Component {
  render() {
    return (
      <button
        type="button"
        className="removeButton"
        onClick={(e) => this.props.handleRemoveClick(this.props.objId)}
      >
        <div>X</div>
      </button>
    );
  }
}

export default Remove;
