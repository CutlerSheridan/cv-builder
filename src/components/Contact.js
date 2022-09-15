import '../styles/Contact.css';
import { Component } from 'react';
import Sidebar from './Sidebar';

class Contact extends Component {
  render() {
    const info = this.props.info;
    return (
      <section className="section-container">
        <Sidebar text="Name"></Sidebar>
        <div className="info-container">
          <form>
            <div className="item-container-edit">
              <label htmlFor="name">Name:</label>
              <input id="name" value={info.name}></input>
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
                value={info.phone}
              ></input>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
