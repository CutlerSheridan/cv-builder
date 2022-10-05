import './App.css';
import { Component } from 'react';
import uniqid from 'uniqid';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contact: {
        id: uniqid(),
        name: '',
        email: '',
        phone: '',
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
            company: '',
            title: '',
            start: '',
            end: '',
            description: '',
          },
        ],
      },
      skills: {
        skill: {
          id: '',
          skillName: '',
        },
        allSkills: [
          {
            id: uniqid(),
            skillName: '',
          },
        ],
      },
      education: {
        program: {
          id: '',
          school: '',
          start: '',
          end: '',
          focus: '',
          description: '',
        },
        programs: [
          {
            id: uniqid(),
            school: '',
            start: '',
            end: '',
            focus: '',
            description: '',
          },
        ],
      },
      editing: true,
    };
    this.toggleEditing = this.toggleEditing.bind(this);
    this.addSampleData = this.addSampleData.bind(this);
    this.clearData = this.clearData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  toggleEditing() {
    this.setState((state) => ({
      editing: !state.editing,
    }));
  }
  addSampleData() {
    const newContact = {
      id: uniqid(),
      name: 'Vincent Adultman',
      email: 'vincent.adultman@gmail.com',
      phone: '770-555-1239',
    };
    this.setState({
      contact: newContact,
    });
    const newExperience = JSON.parse(JSON.stringify(this.state.experience));
    newExperience.jobs = [
      {
        id: uniqid(),
        company: 'Business Company',
        title: 'Mr. Executive',
        start: 'June 10th, 2012',
        end: 'August 21st, 2018',
        description:
          '- Did lots of important business tasks\n- Climbed the corporate ladder\n- Had 1,000 meetings a day',
      },
      {
        id: uniqid(),
        company: 'Smith, Smith, & Smith',
        title: 'Boss of Everything',
        start: 'Many years',
        end: '',
        description:
          '- Made everyone 142x more money\n- Expanded the company to every city on Earth',
      },
    ];
    this.setState({
      experience: newExperience,
    });
    const newSkills = JSON.parse(JSON.stringify(this.state.skills));
    newSkills.allSkills = [
      {
        id: uniqid(),
        skillName: 'Doing business',
      },
      {
        id: uniqid(),
        skillName: 'Being an adult',
      },
      {
        id: uniqid(),
        skillName: 'Talking on the phone',
      },
    ];
    this.setState({
      skills: newSkills,
    });
    const newEducation = JSON.parse(JSON.stringify(this.state.education));
    newEducation.programs = [
      {
        id: uniqid(),
        school: 'Highly Respected University',
        start: '2000',
        end: '2010',
        focus: 'B.A. in Corporate Business Meetings',
        description:
          'Voted "Least Likely to Be Three Children in a Trenchcoat"',
      },
    ];
    this.setState({
      education: newEducation,
    });
  }
  resetClearButton(e) {
    const clearButton = document.querySelector('.clearData-button');
    if (e.target !== clearButton) {
      clearButton.textContent = 'Clear Data';
      clearButton.classList.remove('confirming');
    }
  }
  clearData = (e) => {
    e.stopPropagation();
    const el = e.target;
    if (!el.classList.contains('confirming')) {
      el.textContent = "You're sure?";
      el.classList.add('confirming');
      document.addEventListener('click', this.resetClearButton, { once: true });
      return;
    }
    el.textContent = 'Clear Data';
    el.classList.remove('confirming');
    this.setState({
      contact: {
        id: uniqid(),
        name: '',
        email: '',
        phone: '',
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
            company: '',
            title: '',
            start: '',
            end: '',
            description: '',
          },
        ],
      },
      skills: {
        skill: {
          id: '',
          skillName: '',
        },
        allSkills: [
          {
            id: uniqid(),
            skillName: '',
          },
        ],
      },
      education: {
        program: {
          id: '',
          school: '',
          start: '',
          end: '',
          focus: '',
          description: '',
        },
        programs: [
          {
            id: uniqid(),
            school: '',
            start: '',
            end: '',
            focus: '',
            description: '',
          },
        ],
      },
    });
  };
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
    return this.isObjEmpty(lastObj);
  };
  isObjEmpty = (obj) => {
    for (let prop in obj) {
      if (prop === 'id') {
        continue;
      }
      if (obj[prop] !== '') {
        return false;
      }
    }
    return true;
  };
  render() {
    return (
      <div className="cv-container">
        <div className="controls-container">
          <button
            type="button"
            className="formControl edit-toggle"
            onClick={this.toggleEditing}
          >
            toggle edit mode
          </button>
          <button
            type="button"
            className="formControl demo-button"
            onClick={this.addSampleData}
          >
            Add sample data
          </button>
          <button
            type="button"
            className="formControl clearData-button"
            onClick={this.clearData}
          >
            Clear Data
          </button>
        </div>
        <div className="cv">
          <Contact
            contact={this.state.contact}
            editing={this.state.editing}
            onchange={this.handleChange}
            isObjEmpty={this.isObjEmpty}
          ></Contact>
          <Experience
            experience={this.state.experience}
            editing={this.state.editing}
            onchange={this.handleChange}
            handleAddClick={this.addItem}
            handleRemoveClick={this.removeItem}
            isObjEmpty={this.isObjEmpty}
          ></Experience>
          <Skills
            skills={this.state.skills}
            editing={this.state.editing}
            onchange={this.handleChange}
            handleAddClick={this.addItem}
            handleRemoveClick={this.removeItem}
            isObjEmpty={this.isObjEmpty}
          ></Skills>
          <Education
            education={this.state.education}
            editing={this.state.editing}
            onchange={this.handleChange}
            handleAddClick={this.addItem}
            handleRemoveClick={this.removeItem}
            isObjEmpty={this.isObjEmpty}
          ></Education>
          <Sidebar text=""></Sidebar>
        </div>
      </div>
    );
  }
}

export default App;
