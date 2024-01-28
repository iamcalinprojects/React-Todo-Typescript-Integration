import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ITodoObj } from "../App";
import { PropsTodoList } from "./TodoList";

interface PropsTodos extends PropsTodoList {
  todo: ITodoObj;
}
const Todo = ({ todo, toggleComplete, removeTodo }: PropsTodos) => {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <div
      className='li-align mt-3'
      style={{
        backgroundColor: todo.completed ? "rgb(71, 239, 160)" : "",
      }}
    >
      <input type='checkbox' onClick={handleCheckboxClick} />
      <div className='li-display'>
        <li
          style={{
            textDecoration: todo.completed ? "line-through" : "",
          }}
        >
          {todo.task}
        </li>
      </div>

      <Button variant='danger' onClick={handleRemoveClick}>
        X
      </Button>
    </div>
  );
};

export { Todo };
