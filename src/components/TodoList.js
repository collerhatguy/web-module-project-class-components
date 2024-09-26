// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo";

export default class TodoList extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                {this.props.todos.map(todo =>  
                    <Todo 
                        todo={todo} 
                        key={todo.id} 
                        checkTodo={() => this.props.checkTodo(todo)}
                    />
                )}
            </div>
        )
    }
}
