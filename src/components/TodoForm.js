import React, {useState} from 'react'

export default function TodoForm({handleTodo, clearTodos}) {
    const [todo, setTodo] = useState("")
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                handleTodo(todo)
                }}>
                <label for="todo">
                    What needs to be done?
                    <input type="text" id="todo" name="todo" onChange={e => {setTodo(e.target.value)}}></input>
                </label>
                <button type="submit">Submit</button>
                <button onClick={() => clearTodos()}>Clear Completed Todos</button>
            </form>
        </div>
    )
}
