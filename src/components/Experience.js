import { Component } from 'react';
import Sidebar from './Sidebar';

class Experience extends Component {
  render() {
    const { editing, info, onchange } = this.props;
    return (
      <section className="section-container">
        <Sidebar text="Experience"></Sidebar>
        <div className={`section-preview ${editing ? 'hidden' : ''}`}>
          {info.jobs.map((j) => (
            <div className="item-container">{j.company}</div>
          ))}
        </div>
        <form className={`${editing ? '' : 'hidden'}`}>
          {info.jobs.map((j) => {
            return (
              <div className="item-container-edit" key={j.id}>
                <label htmlFor={`${j.id}`}>Company:</label>
                <input
                  id={`${j.id}`}
                  onChange={(e) => onchange(e, 'experience', 'company', j.id)}
                  value={j.company}
                ></input>
              </div>
            );
          })}
        </form>
      </section>
    );
  }
}

export default Experience;
