import { Component } from 'react';
import Sidebar from './Sidebar';
import AllItems from './AllItems';
import Add from './Add';

class Education extends Component {
  render() {
    const { editing, info, onchange } = this.props;
    return (
      <section className="section-container">
        <Sidebar text="Education"></Sidebar>
        <div className={`section-preview ${editing ? 'hidden' : ''}`}>
          {info.programs.map((p) => {
            return (
              <div className="program" key={`static_${p.id}`}>
                <div className="item-container">{p.school}</div>
                <div className="item-container">
                  {p.start} - {p.end}
                </div>
                <div className="item-container">{p.focus}</div>
                <div className="item-container">{p.description}</div>
              </div>
            );
          })}
        </div>
        <form className={`${editing ? '' : 'hidden'}`}>
          {info.programs.map((p) => {
            return (
              <div className="program-edit" key={`program_${p.id}`}>
                <AllItems
                  obj={p}
                  onchange={onchange}
                  section="education"
                  inputProps={[
                    'school',
                    'start',
                    'end',
                    'focus',
                    'description',
                  ]}
                ></AllItems>
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
