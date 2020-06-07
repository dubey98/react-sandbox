import React from "react";
import "./App.css";

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
        <form>
          <label htmlFor="newTodo">Create a new Todo :</label>
          <br />
          <input
            type="text"
            name="newTodo"
            placeholder="new Todo"
            onChange={(e) => this.takeinput(e)}
            value={this.state.todoTitle}
          />
          <button type="submit" onClick={(e) => this.handleForm(e)}>
            create
          </button>
        </form>
        <hr />
        <div>
          {this.state.todos.map((todo, index) => {
            return (
              <div key={`${index}`} className="todo">
                <h3 className={todo.done ? "strike" : ""}>{todo.title}</h3>
                <div>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={(e) => this.completeTask(e, index)}
                  />
                  <small>{todo.done ? "Completed" : "pending"}</small>
                  <button onClick={(e, index) => this.deleteTask(e, index)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
