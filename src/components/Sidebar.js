import '../styles/Sidebar.css';
import { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className={`sidebar`}>
        <h2 className="sidebar-header">{this.props.text.toUpperCase()}</h2>
      </div>
    );
  }
}

export default Sidebar;
