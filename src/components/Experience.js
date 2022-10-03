import { Component } from 'react';
import Sidebar from './Sidebar';
import AllItems from './AllItems';
import Add from './Add';

class Experience extends Component {
  render() {
    const { editing, info } = this.props;
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
              <div className="item-container">{j.description}</div>
            </div>
          ))}
        </div>
        <form className={`${editing ? '' : 'hidden'}`}>
          {info.jobs.map((j) => {
            return (
              <div className="job-edit" key={`job_${j.id}`}>
                <AllItems
                  obj={j}
                  onchange={this.props.onchange}
                  section="experience"
                  inputProps={[
                    'company',
                    'title',
                    'start',
                    'end',
                    'description',
                  ]}
                ></AllItems>
              </div>
            );
          })}
          <Add
            section="experience"
            handleAddClick={this.props.handleAddClick}
          ></Add>
        </form>
      </section>
    );
  }
}

export default Experience;
