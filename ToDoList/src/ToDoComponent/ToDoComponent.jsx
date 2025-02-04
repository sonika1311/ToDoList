import { useState } from 'react'
import './ToDoComponent.css'
import { useEffect } from 'react';
export const TodoComponent =()=>{
    const [inputValue,setInputValue] = useState("")
    const [task, setTask] =useState([]);

    /*useEffect(()=>{
        console.log(task)
        console.log(inputValue)
    },[task,inputValue])*/
    const handleformSubmit = (event) =>{
        event.preventDefault()
        console.log(inputValue)
        if(!inputValue) return;
        setTask((prevTask) => {return [...prevTask,inputValue] }) //state update is asynchronus, but doesnt return a promise. hence use the useEffect hook to log updated value of task.
        //console.log(task) //simple log statement returns previous value as the setTask is async
    }
    return(
        <section className="todo-container">
            <header>
                <h1>To Do List</h1>
            </header>
            <section>
                <form onSubmit={handleformSubmit}>
                    <input type='text' value={inputValue}
                    onChange={(event)=>{setInputValue(event.target.value)}}
                    ></input>
                    <button type='submit'>Add Task</button>
                </form>
            </section>
        </section>
    )
}