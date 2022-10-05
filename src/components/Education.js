import { Component } from 'react';
import Sidebar from './Sidebar';
import AllItems from './AllItems';
import Add from './Add';
import Remove from './Remove';

class Education extends Component {
  render() {
    const { editing, education, onchange } = this.props;
    return (
      <section
        className={`section-container ${
          !editing && education.programs.length === 0 ? 'hidden' : ''
        }`}
      >
        <Sidebar text="Education"></Sidebar>
        <div className={`section-preview ${editing ? 'hidden' : ''}`}>
          {education.programs
            .filter((p) => !this.props.isObjEmpty(p))
            .map((p) => {
              return (
                <div className="group program" key={`static_${p.id}`}>
                  <div className="item-container">{p.school}</div>
                  <div className="item-container">
                    {p.start}
                    {p.start !== '' && p.end !== '' ? ' - ' : ''}
                    {p.end}
                  </div>
                  <div className="item-container">{p.focus}</div>
                  <div className="item-container item-description-static">
                    {p.description}
                  </div>
                </div>
              );
            })}
        </div>
        <form className={`${editing ? '' : 'hidden'}`}>
          {education.programs.map((p) => {
            return (
              <div className="group-edit program-edit" key={`program_${p.id}`}>
                <AllItems
                  obj={p}
                  onchange={onchange}
                  section="education"
                  inputProps={[
                    'school',
                    'focus',
                    'start',
                    'end',
                    'description',
                  ]}
                ></AllItems>
                <Remove
                  objId={p.id}
                  handleRemoveClick={this.props.handleRemoveClick}
                ></Remove>
              </div>
            );
          })}
          <Add
            section="education"
            handleAddClick={this.props.handleAddClick}
          ></Add>
        </form>
      </section>
    );
  }
}

export default Education;
