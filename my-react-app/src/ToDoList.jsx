import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Learn JSX",
    "Learn Components",
    "Learn Props",
    "Learn State",
    "Learn Hooks",
    "Learn Router",
    "Learn Redux",
    "Learn Context",
    "Learn Firebase",
  ]);

  function addTask() {
    const task = document.getElementById("task").value;
    if (task === "") {
      alert("Please enter a task.");
      return;
    }
    setTasks((t) => [...t, task]);
    document.getElementById("task").value = "";
  }

  function removeTask(index) {
    setTasks(
      tasks.filter((_, i) => {
        return i !== index;
      })
    );
  }

  function moveTaskUp(index) {
    const updatedTasks = [...tasks];
    if (index > 0) {
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    const updatedTasks = [...tasks];
    if (index < tasks.length - 1) {
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="todo-list">
        <h1>ToDo List App</h1>
        <input type="text" placeholder="Enter task" id="task" />
        <button className="add-button" onClick={addTask}>
          ➕
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => removeTask(index)}
              >
                ␡
              </button>
              <button className="up-button" onClick={() => moveTaskUp(index)}>
                🔺
              </button>
              <button
                className="down-button"
                onClick={() => moveTaskDown(index)}
              >
                🔻
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
