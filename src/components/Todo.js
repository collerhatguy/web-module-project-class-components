import React from 'react'
import "./Todo.css";

export default function Todo({todo, checkTodo}) {
    const style = {
        textDecoration: todo.completed ? "line-through" : "none",
    }
    return (
        <div className="todo">
            <span style={style}>{todo.task}</span>
            <input type="radio" onClick={checkTodo}></input>
        </div>
    )
}
