import './App.css';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  const [state, setState] = useState(
    localStorage.getItem('storedState')
      ? { ...JSON.parse(localStorage.getItem('storedState')) }
      : {
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
        }
  );
  useEffect(() => {
    console.log('state changed');
    console.log(JSON.parse(JSON.stringify(state)));
    localStorage.setItem('storedState', JSON.stringify(state));
  }, [state]);
  function toggleEditing() {
    const toggledMode = { editing: !state.editing };
    setState((prevState) => {
      return { ...prevState, ...toggledMode };
    });
  }
  function addSampleData() {
    const newState = JSON.parse(JSON.stringify(state));
    newState.contact = {
      id: uniqid(),
      name: 'Vincent Adultman',
      email: 'vincent.adultman@gmail.com',
      phone: '770-555-1239',
    };
    newState.experience.jobs = [
      {
        id: uniqid(),
        company: 'Business Company',
        title: 'Mr. Executive',
        start: 'October 10th, 2012',
        end: 'August 21st, 2018',
        description:
          '- Did lots of important business tasks\n- Climbed the corporate ladder\n- Had 1,000 meetings a day',
      },
      {
        id: uniqid(),
        company: 'Smith, Smith, & Smith',
        title: 'Boss of Everything',
        start: 'March 2009',
        end: 'June 2012',
        description:
          '- Made everyone 142x more money\n- Expanded the company to every city on Earth',
      },
      {
        id: uniqid(),
        company: 'Important Company, Inc.',
        title: 'Adult Person in Charge',
        start: 'Many years',
        end: '',
        description:
          '- Got my fellow adults to do all the things they were supposed to do\n- Showed everyone a lot of Powerpoints about business',
      },
    ];
    newState.skills.allSkills = [
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
      {
        id: uniqid(),
        skillName: 'Excel',
      },
      {
        id: uniqid(),
        skillName: 'Making business deals',
      },
    ];
    newState.education.programs = [
      {
        id: uniqid(),
        school: 'Highly Respected University',
        start: '2000',
        end: '2003',
        focus: 'B.A. in Corporate Business Meetings',
        description:
          'Voted "Least Likely to Be Three Children in a Trenchcoat" by everybody at the school',
      },
    ];
    setState(newState);
  }
  const resetClearButton = (e) => {
    const clearButton = document.querySelector('.clearData-button');
    if (e.target !== clearButton) {
      clearButton.textContent = 'Clear Data';
      clearButton.classList.remove('confirming');
    }
  };
  const clearData = (e) => {
    e.stopPropagation();
    const el = e.target;
    if (!el.classList.contains('confirming')) {
      el.textContent = "You're sure?";
      el.classList.add('confirming');
      document.addEventListener('click', resetClearButton, { once: true });
      return;
    }
    el.textContent = 'Clear Data';
    el.classList.remove('confirming');
    setState((prevState) => {
      return {
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
        editing: prevState.editing,
      };
    });
  };
  const handleChange = (e, section, prop) => {
    const newObj = JSON.parse(JSON.stringify(state[section]));
    if (section === 'contact') {
      newObj[prop] = e.target.value;
      setState((prevState) => {
        return { ...prevState, ...{ [section]: newObj } };
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
    setState((prevState) => {
      return { ...prevState, ...{ [section]: newObj } };
    });
  };
  const addItem = (section) => {
    const newObj = JSON.parse(JSON.stringify(state[section]));
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
    if (!isLastObjEmpty(newObj[arrayName])) {
      newObj[unitName].id = uniqid();
      newObj[arrayName] = newObj[arrayName].concat(newObj[unitName]);
      setState((prevState) => {
        return { ...prevState, ...{ [section]: newObj } };
      });
    }
  };
  const removeItem = (objId) => {
    const stateCopy = JSON.parse(JSON.stringify(state));
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
          setState(stateCopy);
          break;
        }
      }
    }
  };
  const isLastObjEmpty = (objArray) => {
    if (objArray.length === 0) {
      return false;
    }
    const lastObj = objArray[objArray.length - 1];
    return isObjEmpty(lastObj);
  };
  const isObjEmpty = (obj) => {
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
  return (
    <div className="cv-container">
      <header>
        <h1>CV Builder</h1>
        <p>Enter your information, then press "Toggle preview mode."</p>
        <p>
          To save your CV as a PDF, open your browser's print preview and select
          "export as PDF" or "save as PDF." Make sure it's not set to black and
          white!
        </p>
        <p>
          If the alignment on the PDF is wrong, just bump the scale up or down
          one or two notches. Or if it breaks onto a second page, bump it down
          as much as you need.
        </p>
        <div className="controls-container">
          <button
            type="button"
            className="formControl edit-toggle"
            onClick={toggleEditing}
          >
            {state.editing ? 'Switch to preview mode' : 'Switch to edit mode'}
          </button>
          <button
            type="button"
            className="formControl demo-button"
            onClick={addSampleData}
          >
            Add sample data
          </button>
          <button
            type="button"
            className="formControl clearData-button"
            onClick={clearData}
          >
            Clear Data
          </button>
        </div>
      </header>
      <div className="cv">
        <div className="filler-header">
          <Sidebar text=""></Sidebar>
          <div className="filler-headerContent"></div>
        </div>
        <Contact
          contact={state.contact}
          editing={state.editing}
          onchange={handleChange}
          isObjEmpty={isObjEmpty}
        ></Contact>
        <Experience
          experience={state.experience}
          editing={state.editing}
          onchange={handleChange}
          handleAddClick={addItem}
          handleRemoveClick={removeItem}
          isObjEmpty={isObjEmpty}
        ></Experience>
        <Skills
          skills={state.skills}
          editing={state.editing}
          onchange={handleChange}
          handleAddClick={addItem}
          handleRemoveClick={removeItem}
          isObjEmpty={isObjEmpty}
        ></Skills>
        <Education
          education={state.education}
          editing={state.editing}
          onchange={handleChange}
          handleAddClick={addItem}
          handleRemoveClick={removeItem}
          isObjEmpty={isObjEmpty}
        ></Education>
        <div className="filler-footer">
          <Sidebar text=""></Sidebar>
          <div className="filler-footerContent"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
