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
      skills: [],
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
    this.addJobOrProgram = this.addJobOrProgram.bind(this);
  }
  handleChange = (e, section, prop) => {
    const newObj = { ...this.state[section] };
    if (section === 'contact') {
      newObj[prop] = e.target.value;
      this.setState({
        [section]: newObj,
      });
    } else if (section === 'experience' || section === 'education') {
      const jobsOrPrograms = section === 'experience' ? 'jobs' : 'programs';
      newObj[jobsOrPrograms] = newObj[jobsOrPrograms].map((x) => {
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
    } else if (section === 'skills') {
      // change things
    }
  };
  addJobOrProgram = (section) => {
    const newObj = { ...this.state[section] };
    const jobOrProgram = section === 'experience' ? 'job' : 'program';

    newObj[jobOrProgram].id = uniqid();
    newObj[`${jobOrProgram}s`] = newObj[`${jobOrProgram}s`].concat(
      newObj[jobOrProgram]
    );
    console.log(newObj[`${jobOrProgram}s`]);
    this.setState({
      [section]: newObj,
    });
  };
  toggleEditing() {
    this.setState((state) => ({
      editing: !state.editing,
    }));
  }
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
            handleAddClick={this.addJobOrProgram}
          ></Experience>
          <Education
            info={this.state.education}
            editing={this.state.editing}
            onchange={this.handleChange}
          ></Education>
        </div>
      </div>
    );
  }
}

export default App;
