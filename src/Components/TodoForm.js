import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from "react-icons/fa";



const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed: false
    });
    function handleTaskInputChange(e) {
        setTodo({...todo, task:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({...todo,id: uuidv4()});
            //reset input
            setTodo({...todo, task: ""});
        }

    }
    return (
    <form onSubmit={handleSubmit} style={{display:"flex"}} >
        <input
        name='task'
        type='text'
        value={todo.task} 
        onChange={handleTaskInputChange}
        placeholder='Add todo'
        className='task'
        />
        <button 
        type='submit'
        className='button'
        ><FaPlus style={{display: "flex", color: "white"}}/></button>
    </form>
    )
}

export default TodoForm;
