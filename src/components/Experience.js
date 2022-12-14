import '../styles/Experience.css';
import Sidebar from './Sidebar';
import AllItems from './AllItems';
import Add from './Add';
import Remove from './Remove';

const Experience = (props) => {
  const { editing, experience } = props;
  return (
    <section
      className={`section-container ${
        !editing && experience.jobs.length === 0 ? 'hidden' : ''
      }`}
    >
      <Sidebar text="Experience"></Sidebar>
      <div className={`section-preview ${editing ? 'hidden' : ''}`}>
        <div className="group-container">
          {experience.jobs
            .filter((j) => !props.isObjEmpty(j))
            .map((j) => (
              <div className="group job" key={`static_${j.id}`}>
                <div className="item-container experience-company-static">
                  {j.company}
                </div>
                <div className="item-container experience-title-static">
                  {j.title}
                </div>
                <div className="item-container experience-dates-static">
                  {j.start}
                  {j.start !== '' && j.end !== '' ? ' - ' : ''}
                  {j.end}
                </div>
                <div className="item-container experience-description-static">
                  {j.description}
                </div>
              </div>
            ))}
        </div>
      </div>
      <form className={`${editing ? '' : 'hidden'} experience-container-edit`}>
        {experience.jobs.map((j) => {
          return (
            <div className="group-edit job-edit" key={`job_${j.id}`}>
              <AllItems
                obj={j}
                onchange={props.onchange}
                section="experience"
                inputProps={['company', 'title', 'start', 'end', 'description']}
              ></AllItems>
              <Remove
                objId={j.id}
                handleRemoveClick={props.handleRemoveClick}
              ></Remove>
            </div>
          );
        })}
        <Add section="experience" handleAddClick={props.handleAddClick}></Add>
      </form>
    </section>
  );
};

export default Experience;
