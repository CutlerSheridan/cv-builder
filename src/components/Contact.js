import '../styles/Contact.css';
import { Component } from 'react';
import Sidebar from './Sidebar';
import AllItems from './AllItems';

class Contact extends Component {
  render() {
    const { info, onchange, editing } = this.props;
    return (
      <section className="section-container">
        <Sidebar text="Name"></Sidebar>
        <div className={`section-preview ${editing ? 'hidden' : ''}`}>
          <div className="group">
            <div className="item-container">{info.name}</div>
            <div className="item-container">{info.email}</div>
            <div className="item-container">{info.phone}</div>
          </div>
        </div>

        <form className={`${editing ? '' : 'hidden'}`}>
          <div className="group-edit">
            <AllItems
              obj={info}
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
