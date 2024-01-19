import React from 'react'
import { Container } from 'react-bootstrap';
import { Todo } from './Todo';

const TodoList = ({todos, toggleComplete, removeTodo}) => {
  return (
      <Container className='task-container text-dark'>
          <h3 className='bold'>Tasks</h3>
      <ul className='ul-task'>
          {todos.map(todo =>(
              <Todo 
              key={todo.id} 
              todo={todo} 
              toggleComplete={toggleComplete} 
              removeTodo={removeTodo}
              />
          ))}
      </ul>
      </Container>
  )
}

export {TodoList};