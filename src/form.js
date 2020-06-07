import React from "react";

function Form(props) {
  return (
    <form>
      <label htmlFor="newTodo">Create a new Todo :</label>
      <br />
      <input
        type="text"
        name="newTodo"
        placeholder="new Todo"
        onChange={(e) => props.takeinput(e)}
        value={props.todoTitle}
      />
      <button type="submit" onClick={(e) => props.handleForm(e)}>
        create
      </button>
    </form>
  );
}
export default Form;
