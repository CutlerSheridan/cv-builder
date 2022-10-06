import { Component } from 'react';
import '../styles/Skills.css';
import Sidebar from './Sidebar';
import Item from './Item';
import Add from './Add';
import Remove from './Remove';

class Skills extends Component {
  render() {
    const { editing, skills } = this.props;
    return (
      <section
        className={`section-container ${
          !editing && skills.allSkills.length === 0 ? 'hidden' : ''
        }`}
      >
        <Sidebar text="Skills"></Sidebar>
        <div className={`section-preview ${editing ? 'hidden' : ''}`}>
          <div className="group-container">
            <ul
              className={`group skills-container-static ${
                !editing &&
                skills.allSkills.length <= 1 &&
                this.props.isObjEmpty(skills.allSkills[0])
                  ? 'hidden'
                  : ''
              }`}
            >
              {skills.allSkills
                .filter((s) => !this.props.isObjEmpty(s))
                .map((s) => (
                  <li
                    className="item-container skill-static"
                    key={`static_${s.id}`}
                  >
                    {s.skillName}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <form className={`${editing ? '' : 'hidden'}`}>
          <div className="skills-container-edit">
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
          </div>
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
