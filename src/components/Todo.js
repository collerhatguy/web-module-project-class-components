import React from 'react'

export default function Todo({todo, checkTodo}) {
    const style = {
        textDecoration: todo.completed ? "line-through" : "none",
    }
    return (
        <div>
            <span style={style}>{todo.task}</span>
            <input type="radio" onClick={checkTodo}></input>
        </div>
    )
}
