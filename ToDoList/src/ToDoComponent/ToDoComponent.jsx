import './ToDoComponent.css'
export const TodoComponent =()=>{
    return(
        <section className="todo-container">
            <header>
                <h1>To Do List</h1>
            </header>
            <section>
                <form>
                    <input type='text' ></input>
                    <button type='submit'>Add Task</button>
                </form>
            </section>
        </section>
    )
}