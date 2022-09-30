import '../styles/Contact.css';
import { Component } from 'react';
import Sidebar from './Sidebar';
import Item from './Item';

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
          <Item
            item={info}
            onchange={onchange}
            section="contact"
            prop="name"
          ></Item>
          <Item
            item={info}
            onchange={onchange}
            section="contact"
            prop="email"
          ></Item>
          <Item
            item={info}
            onchange={onchange}
            section="contact"
            prop="phone"
          ></Item>
        </form>
        <p className="editTest">
          {this.props.editing ? 'is being edited' : 'is not being edited'}
        </p>
      </section>
    );
  }
}

export default Contact;
