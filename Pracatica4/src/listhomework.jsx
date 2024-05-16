import PropTypes from "prop-types";

const Listhomework = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
          />
          <span style={{ color: "black" }}>{task.title}</span>
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

Listhomework.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Listhomework;
