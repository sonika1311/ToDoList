import { useState } from 'react'
import './ToDoComponent.css'
export const TodoComponent =()=>{
    const [inputValue,setInputValue] = useState("")
    const handleformSubmit = (event) =>{
        event.preventDefault()
        console.log(event)
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