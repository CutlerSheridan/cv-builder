import '../styles/Contact.css';
import { Component } from 'react';
import Sidebar from './Sidebar';

class Contact extends Component {
  render() {
    const { info, onchange, editing } = this.props;
    return (
      <section className="section-container">
        <Sidebar text="Name"></Sidebar>
        <div className={`section-preview ${editing ? 'hidden' : ''}`}>
          <div className="item-container">{info.name}</div>
          <div className="item-container">{info.email}</div>
          <div className="item-container">{info.phone}</div>
        </div>

        <form className={`${editing ? '' : 'hidden'}`}>
          <div className="item-container-edit">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              onChange={(e) => onchange(e, 'contact', 'name')}
              value={info.name}
            ></input>
          </div>
          <div className="item-container-edit">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={info.email}></input>
          </div>
          <div className="item-container-edit">
            <label htmlFor="phone">Phone Number:</label>
            <input
              minLength="10"
              pattern=".*(\d{3})[^0-9]*(\d{3})[^0-9]*(\d{4})[^a-zA-Z0-9]?"
              id="phone"
              value={info.phone}
            ></input>
          </div>
        </form>
        <p className="editTest">{this.props.editing ? 'is being edited' : 'is not being edited'}</p>
      </section>
    );
  }
}

export default Contact;
