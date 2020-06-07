import React from "react";

const Todo = (props) => {
  return (
    <div className="todo">
      <h3 className={props.todo.done ? "strike" : ""}>{props.todo.title}</h3>
      <div>
        <input
          type="checkbox"
          checked={props.todo.done}
          onChange={(e) => props.completeTask(e, props.index)}
        />
        <small>{props.todo.done ? "Completed" : "pending"}</small>
        <button onClick={(e) => props.deleteTask(e, props.index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
