import { Component } from 'react';
import Sidebar from './Sidebar';
import AllItems from './AllItems';
import Add from './Add';
import Remove from './Remove';

class Experience extends Component {
  render() {
    const { editing, info } = this.props;
    return (
      <section className="section-container">
        <Sidebar text="Experience"></Sidebar>
        <div className={`section-preview ${editing ? 'hidden' : ''}`}>
          {info.jobs
            .filter((j) => !this.props.isObjEmpty(j))
            .map((j) => (
              <div className="group job" key={`static_${j.id}`}>
                <div className="item-container">{j.company}</div>
                <div className="item-container">{j.title}</div>
                <div className="item-container">
                  {j.start}
                  {j.start !== '' && j.end !== '' ? ' - ' : ''}
                  {j.end}
                </div>
                <div className="item-container item-description-static">
                  {j.description}
                </div>
              </div>
            ))}
        </div>
        <form className={`${editing ? '' : 'hidden'}`}>
          {info.jobs.map((j) => {
            return (
              <div className="group-edit job-edit" key={`job_${j.id}`}>
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
                <Remove
                  objId={j.id}
                  handleRemoveClick={this.props.handleRemoveClick}
                ></Remove>
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
