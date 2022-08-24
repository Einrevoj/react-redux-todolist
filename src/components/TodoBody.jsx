import React from "react";

export default function TodoBody() {
  const todos = [];

  return todos.map((todo, index) => (
    <div id="tasks" key={index}>
      <div className="task"></div>
      <div className="content">
        <input type="text" value={todo.text} readOnly={true} />
      </div>
      <div className="actions">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  ));
}
