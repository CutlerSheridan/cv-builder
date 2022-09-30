import { Component } from 'react';
import Sidebar from './Sidebar';
import Item from './Item';

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
                <Item
                  item={j}
                  onchange={onchange}
                  section="experience"
                  prop="company"
                ></Item>
                <Item
                  item={j}
                  onchange={onchange}
                  section="experience"
                  prop="title"
                ></Item>
              </div>
            );
          })}
        </form>
      </section>
    );
  }
}

export default Experience;
