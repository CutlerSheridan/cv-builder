import '../styles/Sidebar.css';
import { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div
        className={`sidebar ${this.props.text === '' ? 'sidebar-filler' : ''}`}
      >
        <h2 className="sidebar-header">{this.props.text}</h2>
      </div>
    );
  }
}

export default Sidebar;
