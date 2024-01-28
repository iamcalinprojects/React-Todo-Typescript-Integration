import "./App.css";
import React, { useState } from "react";
import TodoForm from "./Components/TodoForm";
import { TodoList } from "./Components/TodoList";
import { Container } from "react-bootstrap";
export interface ITodoObj {
  id: string;
  task: string;
  completed: boolean;
  name: string;
  price: number;
}

function App() {
  const [todos, setTodos] = useState<ITodoObj[]>([]);

  function toggleComplete(id: string) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }
  function removeTodo(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <div className='App bg-work row gx-0'>
        <Container className='col-md-6 col-lg-7'>
          <header className='App-header'>
            <h2 className='mb-4 text-dark bold'>Todo-App</h2>
            <TodoForm todos={todos} setTodoFunc={setTodos} />
          </header>
        </Container>
        <Container className='col-md-6 col-lg-5'>
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
