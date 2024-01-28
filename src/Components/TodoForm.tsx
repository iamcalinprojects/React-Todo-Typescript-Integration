import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";
import { ITodoObj } from "../App";

interface SetPropTypes {
  setTodoFunc: React.Dispatch<React.SetStateAction<ITodoObj[]>>;
  todos: ITodoObj[];
}
const TodoForm = ({ todos, setTodoFunc }: SetPropTypes) => {
  const [task, setTask] = useState("");
  const focusAddTodo = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setTimeout(() => {
      focusAddTodo && focusAddTodo.current && focusAddTodo.current.focus();
    }, 0);
  }, []);

  function handleTaskInputChange(e: any) {
    setTask(e.target.value);
  }
  function handleSubmit() {
    console.log("e submit, ");
    setTodoFunc([
      ...todos,
      {
        id: uuidv4(),
        task: task,
        completed: false,
        name: "",
        price: 0,
      },
    ]);
    setTask("");
  }
  return (
    <form style={{ display: "flex" }}>
      <input
        name='task'
        type='text'
        ref={focusAddTodo}
        value={task}
        onChange={(e) => handleTaskInputChange(e)}
        placeholder='Add todo'
        className='task'
      />
      <div
        onClick={() => (task ? handleSubmit() : null)}
        className='button'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          marginLeft: "4px",
          padding: "10px 15px",
          backgroundColor: task ? "" : "lightgreen",
          cursor: task ? "pointer" : "",
        }}
      >
        <FaPlus style={{ display: "flex", color: "white" }} />
      </div>
    </form>
  );
};

export default TodoForm;
