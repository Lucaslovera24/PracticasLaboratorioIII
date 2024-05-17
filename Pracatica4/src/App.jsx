import { useState } from "react";
import Newhomework from "./components/NewHomework/newhomework";
import Listhomework from "./components/ListHomework/listhomework";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { title: title, completed: false, id: Math.random() };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Newhomework addTask={addTask} />
      <Listhomework
        tasks={tasks}
        toggleTask={(id) => toggleTask(id)}
        deleteTask={(id) => deleteTask(id)}
      />
    </div>
  );
};

export default App;
