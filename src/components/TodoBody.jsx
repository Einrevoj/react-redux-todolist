import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionTodo from "../redux/actions/actionTodo";
import * as actionUpdate from "../redux/actions/actionUpdate";

export default function TodoBody() {
  const todos = useSelector((state) => state.todos);
  const update = useSelector((state) => state.update);
  const [editInput, setEditInput] = useState(update ? update.text : "");

  const { removeTodo } = bindActionCreators(actionTodo, useDispatch());
  const { setUpdateTodo, saveUpdateTodo } = bindActionCreators(
    actionUpdate,
    useDispatch()
  );

  const setUpdate = (todo) => {
    setUpdateTodo(todo);
    setEditInput(update.text);
  };

  const saveUpdate = (id) => {
    const updatedTodo = { id, text: editInput };
    saveUpdateTodo(updatedTodo);
  };

  return todos.map((todo, index) => (
    <div id="tasks" key={index}>
      <div className="task">
        <div className="content">
          <input
            className="text"
            value={update.id !== todo.id ? todo.text : editInput}
            onChange={(e) => setEditInput(e.target.value)}
            readOnly={update.id !== todo.id}
          />
        </div>
        <div className="actions">
          {update.id !== todo.id ? (
            <button className="edit" onClick={() => setUpdate(todo)}>
              Edit
            </button>
          ) : (
            <button className="edit" onClick={() => saveUpdate(todo.id)}>
              Save
            </button>
          )}
          {update.id !== todo.id && (
            <button className="delete" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  ));
}
