import React, { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, text: "walk the dog" },
    { id: 2, text: "pick up coffee" },
    { id: 3, text: "respond to emails" },
  ]);

  const handleNewTaskChange = function (event) {
    setNewTask(event.target.value);
  };

  function handleSubmit(event) {
    // do not refresh page (as is the default when submitting a HTML form)
    event.preventDefault();

    // set tasks to be all current tasks with new task
    const newTaskID = tasks.length + 1;
    const task = { id: newTaskID, text: newTask };
    setTasks([...tasks, task]);

    // clear the text for the new task
    setNewTask("");
  }

  return (
    <div className="container">
      <h1 className="p-3 text-center">To Do List</h1>

      <h3>Add a Task:</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newTask}
            onChange={handleNewTaskChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.text}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
