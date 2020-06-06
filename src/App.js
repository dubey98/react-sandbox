import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          title: "",
          done: false,
        },
      ],
    };
  }
  handleForm(e) {
    e.preventDefault();
    console.log(e);
  }
  takeinput(e) {
    console.log(e.target.value);
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
          />
          <button type="submit" onClick={(e) => this.handleForm(e)}>
            create
          </button>
        </form>
      </div>
    );
  }
}

export default App;
