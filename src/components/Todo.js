import React from 'react'
import "./Todo.css";

export default class Todo extends React.Component {
    constructor() {
        super()
    }
    render() {
        const style = {
            textDecoration: this.props.todo.completed ? "line-through" : "none",
        }
        return (
        <div className="todo">
            <span style={style}>{this.props.todo.task}</span>
            <input type="radio" onClick={this.props.checkTodo}></input>
        </div>
        )

    }
}
