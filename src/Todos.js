import React from "react";
import Todo from "./todo";

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            todo={todo}
            index={index}
            completeTask={props.completeTask}
            deleteTask={props.deleteTask}
          />
        );
      })}
    </div>
  );
};

export default Todos;
