import { Component } from 'react';
import Sidebar from './Sidebar';
import Item from './Item';
import Add from './Add';
import Remove from './Remove';

class Skills extends Component {
  render() {
    const { editing, skills } = this.props;
    return (
      <section className="section-container">
        <Sidebar text="Skills"></Sidebar>
        <div className={`section-preview ${editing ? 'hidden' : ''}`}>
          <div className="group skills-container">
            {skills.allSkills.map((s) => (
              <div className="item-container" key={`static_${s.id}`}>
                {s.skillName}
              </div>
            ))}
          </div>
        </div>
        <form className={`${editing ? '' : 'hidden'}`}>
          {skills.allSkills.map((s) => (
            <div className="group-edit skills-edit" key={`skill_${s.id}`}>
              <Item
                obj={s}
                onchange={this.props.onchange}
                section="skills"
                prop="skillName"
              ></Item>
              <Remove
                objId={s.id}
                handleRemoveClick={this.props.handleRemoveClick}
              ></Remove>
            </div>
          ))}
          <Add
            section="skills"
            handleAddClick={this.props.handleAddClick}
          ></Add>
        </form>
      </section>
    );
  }
}

export default Skills;
