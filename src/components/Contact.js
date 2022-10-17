import '../styles/Contact.css';
import Sidebar from './Sidebar';
import AllItems from './AllItems';

const Contact = (props) => {
  const { contact, onchange, editing } = props;
  return (
    <section className="section-container">
      <Sidebar text="Name"></Sidebar>
      <div className={`section-preview ${editing ? 'hidden' : ''}`}>
        <div
          className={`group ${
            !editing && props.isObjEmpty(contact) ? 'hidden' : ''
          }`}
        >
          <div className="item-container contact-name-static">
            {contact.name}
          </div>
          <div className="item-container contact-email-static">
            <span className="material-symbols-outlined contact-icon">mail</span>
            {contact.email}
          </div>
          <div className="item-container contact-phone-static">
            <span className="material-symbols-outlined contact-icon">call</span>
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
};

export default Contact;
