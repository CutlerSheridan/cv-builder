import './App.css';
import { Component } from 'react';
import uniqid from 'uniqid';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contact: {
        id: uniqid(),
        name: 'cutler',
        email: 'dsls.fj@ajof.com',
        phone: '7705959505',
      },
      experience: {
        job: {
          id: '',
          company: '',
          title: '',
          start: '',
          end: '',
          description: '',
        },
        jobs: [
          {
            id: uniqid(),
            company: 'a company',
            title: 'a title',
            start: 'June 6th',
            end: 'August 20th',
            description: 'what this job was about',
          },
        ],
      },
      skills: {
        skill: {
          id: uniqid(),
          skillName: '',
        },
        allSkills: [
          {
            id: uniqid(),
            skillName: 'a test skill',
          },
          {
            id: uniqid(),
            skillName: 'powerpoint',
          },
          {
            id: uniqid(),
            skillName: 'communication',
          },
        ],
      },
      education: {
        program: {
          id: uniqid(),
          school: '',
          start: '',
          end: '',
          focus: '',
          description: '',
        },
        programs: [
          {
            id: uniqid(),
            school: 'a school',
            start: '2011',
            end: '2015',
            focus: 'B.A. in Mass Media Telecom',
            description: 'additional info',
          },
        ],
      },
      editing: true,
    };
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  toggleEditing() {
    this.setState((state) => ({
      editing: !state.editing,
    }));
  }
  handleChange = (e, section, prop) => {
    const newObj = JSON.parse(JSON.stringify(this.state[section]));
    if (section === 'contact') {
      newObj[prop] = e.target.value;
      this.setState({
        [section]: newObj,
      });
      return;
    }
    let arrayName;
    switch (section) {
      case 'experience':
        arrayName = 'jobs';
        break;
      case 'education':
        arrayName = 'programs';
        break;
      case 'skills':
        arrayName = 'allSkills';
        break;
      default:
        break;
    }
    newObj[arrayName] = newObj[arrayName].map((x) => {
      if (x.id !== e.target.dataset.id) {
        return x;
      }
      const alteredItem = { ...x };
      alteredItem[prop] = e.target.value;
      return alteredItem;
    });
    this.setState({
      [section]: newObj,
    });
  };
  addItem = (section) => {
    const newObj = JSON.parse(JSON.stringify(this.state[section]));
    let unitName;
    let arrayName;
    switch (section) {
      case 'experience':
        unitName = 'job';
        arrayName = 'jobs';
        break;
      case 'education':
        unitName = 'program';
        arrayName = 'programs';
        break;
      case 'skills':
        unitName = 'skill';
        arrayName = 'allSkills';
        break;
      default:
        break;
    }
    if (!this.isLastObjEmpty(newObj[arrayName])) {
      newObj[unitName].id = uniqid();
      newObj[arrayName] = newObj[arrayName].concat(newObj[unitName]);
      this.setState({
        [section]: newObj,
      });
    }
  };
  removeItem = (objId) => {
    const stateCopy = JSON.parse(JSON.stringify(this.state));
    for (let prop in stateCopy) {
      let arrayName;
      switch (prop) {
        case 'experience':
          arrayName = 'jobs';
          break;
        case 'education':
          arrayName = 'programs';
          break;
        case 'skills':
          arrayName = 'allSkills';
          break;
        default:
          break;
      }
      if (arrayName) {
        const objIndex = stateCopy[prop][arrayName].findIndex(
          (x) => x.id === objId
        );
        if (objIndex > -1) {
          stateCopy[prop][arrayName] = stateCopy[prop][arrayName].filter(
            (x) => x.id !== objId
          );
          this.setState({
            [prop]: stateCopy[prop],
          });
          break;
        }
      }
    }
  };
  isLastObjEmpty = (objArray) => {
    if (objArray.length === 0) {
      return false;
    }
    const lastObj = objArray[objArray.length - 1];
    for (let prop in lastObj) {
      if (prop === 'id') {
        continue;
      }
      if (lastObj[prop] !== '') {
        return false;
      }
    }
    return true;
  };
  render() {
    return (
      <div className="cv-container">
        <button className="editTest" type="button" onClick={this.toggleEditing}>
          toggle edit mode
        </button>
        <div className="cv">
          <Contact
            info={this.state.contact}
            editing={this.state.editing}
            onchange={this.handleChange}
          ></Contact>
          <Experience
            info={this.state.experience}
            editing={this.state.editing}
            onchange={this.handleChange}
            handleAddClick={this.addItem}
            handleRemoveClick={this.removeItem}
          ></Experience>
          <Skills
            editing={this.state.editing}
            skills={this.state.skills}
            onchange={this.handleChange}
            handleAddClick={this.addItem}
            handleRemoveClick={this.removeItem}
          ></Skills>
          <Education
            info={this.state.education}
            editing={this.state.editing}
            onchange={this.handleChange}
            handleAddClick={this.addItem}
            handleRemoveClick={this.removeItem}
          ></Education>
        </div>
      </div>
    );
  }
}

export default App;
