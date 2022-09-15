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
        name: 'cutler',
        email: 'dsls.fj@ajof.com',
        phone: '7705059505',
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
    };
  }
  render() {
    return (
      <div className="cv-container">
        <Contact info={this.state.contact}></Contact>
      </div>
    );
  }
}

export default App;
