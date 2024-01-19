import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { ITodoObj } from "./App";
import { AddTodo } from "./App";
const TodoForm = ({ addTodo }: AddTodo) => {
  const [todo, setTodo] = useState<ITodoObj>({
    id: "",
    task: "",
    completed: false,
    name: "",
    price: 0,
  });
  function handleTaskInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (todo.task.trim()) {
      const newtodo: ITodoObj = {
        ...todo,
      };
      addTodo({ ...todo, id: uuidv4() });
      //reset input
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form style={{ display: "flex" }}>
      <input
        name='task'
        type='text'
        value={todo.task}
        onChange={handleTaskInputChange}
        placeholder='Add todo'
        className='task'
      />
      <button type='submit' className='button'>
        <FaPlus style={{ display: "flex", color: "white" }} />
      </button>
    </form>
  );
};

export default TodoForm;
