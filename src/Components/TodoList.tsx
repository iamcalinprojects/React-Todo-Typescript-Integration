import React from "react";
import { Todo } from "./Todo";
import { ITodoObj } from "../App";

export interface PropsTodoList {
  todos?: ITodoObj[] | undefined;
  toggleComplete: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleComplete, removeTodo }: PropsTodoList) => {
  return (
    <div className='task-container'>
      <h3 className='bold mb-4'>Tasks</h3>
      <ul className='ul-task task'>
        {todos &&
          todos.map((todo: ITodoObj) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          ))}
      </ul>
    </div>
  );
};

export { TodoList };
