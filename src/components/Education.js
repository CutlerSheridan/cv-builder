import '../styles/Education.css';
import Sidebar from './Sidebar';
import AllItems from './AllItems';
import Add from './Add';
import Remove from './Remove';

const Education = (props) => {
  const { editing, education, onchange } = props;
  return (
    <section
      className={`section-container ${
        !editing && education.programs.length === 0 ? 'hidden' : ''
      }`}
    >
      <Sidebar text="Education"></Sidebar>
      <div className={`section-preview ${editing ? 'hidden' : ''}`}>
        <div className="group-container">
          {education.programs
            .filter((p) => !props.isObjEmpty(p))
            .map((p) => {
              return (
                <div className="group program" key={`static_${p.id}`}>
                  <div className="item-container education-school-static">
                    {p.school}
                  </div>
                  <div className="item-container education-focus-static">
                    {p.focus}
                  </div>
                  <div className="item-container education-dates-static">
                    {p.start}
                    {p.start !== '' && p.end !== '' ? ' - ' : ''}
                    {p.end}
                  </div>
                  <div className="item-container education-description-static">
                    {p.description}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <form className={`${editing ? '' : 'hidden'} education-container-edit`}>
        {education.programs.map((p) => {
          return (
            <div className="group-edit program-edit" key={`program_${p.id}`}>
              <AllItems
                obj={p}
                onchange={onchange}
                section="education"
                inputProps={['school', 'focus', 'start', 'end', 'description']}
              ></AllItems>
              <Remove
                objId={p.id}
                handleRemoveClick={props.handleRemoveClick}
              ></Remove>
            </div>
          );
        })}
        <Add section="education" handleAddClick={props.handleAddClick}></Add>
      </form>
    </section>
  );
};

export default Education;
