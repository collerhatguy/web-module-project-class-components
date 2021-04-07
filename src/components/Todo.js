import React from 'react'

export default function Todo({todo, checkTodo}) {
    return (
        <div>
            {todo.task}
            <input type="radio" onClick={checkTodo}></input>
        </div>
    )
}
