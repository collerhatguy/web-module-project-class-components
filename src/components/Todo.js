import React from 'react'

export default function Todo({todo}) {
    return (
        <div>
            {todo.task}
            <input type="radio"></input>
        </div>
    )
}
