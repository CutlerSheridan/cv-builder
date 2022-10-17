import '../styles/Sidebar.css';

const Sidebar = (props) => {
  return (
    <div className={`sidebar`}>
      <h2 className="sidebar-header">{props.text.toUpperCase()}</h2>
    </div>
  );
};

export default Sidebar;
