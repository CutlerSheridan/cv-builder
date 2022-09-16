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
        name: '',
        email: 'dsls.fj@ajof.com',
        phone: '7705959505',
      },
      experience: {
        job: {
          id: uniqid(),
          company: '',
          title: '',
          start: '',
          end: '',
          description: '',
        },
        jobs: [],
      },
      skills: [],
      education: {
        program: {
          id: uniqid(),
          institution: '',
          focus: '',
          start: '',
          end: '',
          description: '',
        },
        programs: [],
      },
      editing: true,
    };
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e, section, prop) => {
    const newObj = { ...this.state[section] };
    newObj[prop] = e.target.value;
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
        </div>
      </div>
    );
  }
}

export default App;
