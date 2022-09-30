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
            <div className="job" key={`static_${j.id}`}>
              <div className="item-container">{j.company}</div>
              <div className="item-container">{j.title}</div>
              <div className="item-container">
                {j.start} - {j.end}
              </div>
            </div>
          ))}
        </div>
        <form className={`${editing ? '' : 'hidden'}`}>
          {info.jobs.map((j) => {
            return (
              <div className="job-edit" key={`job_${j.id}`}>
                <div className="item-container-edit">
                  <label htmlFor={j.id}>Company:</label>
                  <input
                    id={j.id}
                    onChange={(e) => onchange(e, 'experience', 'company')}
                    value={j.company}
                  ></input>
                </div>
                <div className="item-container-edit">
                  <label htmlFor={j.id}>Title:</label>
                  <input
                    id={j.id}
                    onChange={(e) => onchange(e, 'experience', 'title')}
                    value={j.title}
                  ></input>
                </div>
              </div>
            );
          })}
        </form>
      </section>
    );
  }
}

export default Experience;
