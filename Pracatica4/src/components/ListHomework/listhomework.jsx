import PropTypes from "prop-types";

const Listhomework = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span style={{ color: "black" }}>{task.title}</span>
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
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
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Listhomework;
