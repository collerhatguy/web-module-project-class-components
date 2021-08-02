import React, {useState} from 'react'

export default function TodoForm({handleTodo, clearTodos}) {
    const [todo, setTodo] = useState("")
    const submit = e => {
        e.preventDefault()
        handleTodo(todo)
        setTodo("")
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label for="todo">
                    What needs to be done?
                    <input 
                        type="text" 
                        id="todo" 
                        name="todo" 
                        value={todo}
                        onChange={e => {setTodo(e.target.value)}} 
                        required 
                    />
                </label>
                <button type="submit">Submit</button>
                <button onClick={() => clearTodos()}>Clear Completed Todos</button>
            </form>
        </div>
    )
}
