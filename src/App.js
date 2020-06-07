import React from "react";
import "./App.css";
import Form from "./form";
import Todos from "./Todos";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          title: "new todo",
          done: false,
        },
        {
          title: "next on list",
          done: true,
        },
      ],
      todoTitle: "",
    };
  }

  handleForm(e) {
    e.preventDefault();
    const title = this.state.todoTitle;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          title: title,
          done: false,
        },
      ],
      todoTitle: "",
    });
    console.log(this.state.todos);
  }

  takeinput(e) {
    this.setState({
      todoTitle: e.target.value,
    });
  }

  deleteTask(e, index) {
    const todos = this.state.todos.slice();
    console.log(index);
    todos.splice(index, 1);
    this.setState({
      todos: todos,
    });
  }

  completeTask(e, index) {
    const todos = this.state.todos.slice();
    todos[index].done = this.state.todos[index].done ? false : true;
    this.setState({
      todos: todos,
    });
  }

  render() {
    return (
      <div className="App">
        <Form
          takeinput={this.takeinput.bind(this)}
          handleForm={this.handleForm.bind(this)}
          todoTitle={this.state.todoTitle}
        />
        <hr />
        <Todos
          todos={this.state.todos}
          completeTask={this.completeTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }
}

export default App;
