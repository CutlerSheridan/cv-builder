import '../styles/Contact.css';
import { Component } from 'react';
import Sidebar from './Sidebar';
import AllItems from './AllItems';

class Contact extends Component {
  render() {
    const { contact, onchange, editing } = this.props;
    return (
      <section className="section-container">
        <Sidebar text="Name"></Sidebar>
        <div className={`section-preview ${editing ? 'hidden' : ''}`}>
          <div
            className={`group ${
              !editing && this.props.isObjEmpty(contact) ? 'hidden' : ''
            }`}
          >
            <div className="item-container contact-name-static">
              {contact.name}
            </div>
            <div className="item-container contact-email-static">
              {contact.email}
            </div>
            <div className="item-container contact-phone-static">
              {contact.phone}
            </div>
          </div>
        </div>

        <form className={`${editing ? '' : 'hidden'}`}>
          <div className="group-edit">
            <AllItems
              obj={contact}
              onchange={onchange}
              section="contact"
              inputProps={['name', 'email', 'phone']}
            ></AllItems>
          </div>
        </form>
      </section>
    );
  }
}

export default Contact;
