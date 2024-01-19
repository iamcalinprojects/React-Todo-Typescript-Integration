import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Todo = ({todo, toggleComplete, removeTodo}) => {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }
    function handleRemoveClick(){
        removeTodo(todo.id)
    };
  return (
    <Container className='mt-3'style={{ display: "flex", alignContent: "center", justifyContent: "center"}}> 
    <div className='li-align'>
    <input 
    type="checkbox" 
    onClick={handleCheckboxClick}
    />
    <div className='li-display'>
    <li style={{
        color: "white",
        textDecoration: todo.completed ? "line-through" :null,

    }}>{todo.task}</li>
    </div>

    <Button variant='danger' onClick={handleRemoveClick}>X</Button>
    </div>
    </Container>
  )
}

export {Todo};