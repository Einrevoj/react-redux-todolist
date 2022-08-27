import React from "react";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import * as actionLogin from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux";

export default function TodoList() {
  const { logoutUser } = bindActionCreators(actionLogin, useDispatch());
  return (
    <div className="todo-body">
      <h1>Task List 2022</h1>
      <TodoHeader />

      <br />
      <hr />
      <br />
      <br />
      <TodoBody />
      <br />
      <br />
      <Button onClick={() => logoutUser()}>LOGOUT</Button>
    </div>
  );
}
