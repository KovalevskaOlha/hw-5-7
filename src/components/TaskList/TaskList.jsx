import { Component } from "react";
import "./TaskList.css";

class TaskList extends Component {
  static tasks = [];

  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  addItem = (e) => {
    e.preventDefault();
    const value = this.inputRef.value.trim();
    if (!value) return;

    TaskList.tasks.push({ id: Date.now(), text: value });
    this.forceUpdate();
    this.inputRef.value = "";
  };

  deleteItem = (id) => {
    TaskList.tasks = TaskList.tasks.filter(task => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <div className="toDoList">
        <form onSubmit={this.addItem} className="form">
          <input
            className="enterTask"
            placeholder="Enter task"
            ref={el => this.inputRef = el}
          />
          <button className="btnAdd" type="submit">Add</button>
        </form>

        <ul className="taskList">
          {TaskList.tasks.map(task => (
            <li key={task.id} className="taskItem">
              <span>{task.text}</span>
              <button className="btnDelete" onClick={() => this.deleteItem(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;