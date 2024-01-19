import React from 'react'
import { Todo } from './Todo';

const TodoList = ({todos, toggleComplete, removeTodo}) => {
  return (
      <div className='task-container'>
          <h3 className='bold mb-4'>Tasks</h3>
      <ul className='ul-task task'>
          {todos.map(todo =>(
              <Todo 
              key={todo.id} 
              todo={todo} 
              toggleComplete={toggleComplete} 
              removeTodo={removeTodo}
              />
          ))}
      </ul>
      </div>
  )
}

export {TodoList};