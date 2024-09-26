
import React from 'react'

export default class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: "",
        }
    }
    render() {
        const submit = e => {
            e.preventDefault()
            this.props.handleTodo(this.state.todo)
            this.setState({todo: ""})
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
                            value={this.state.todo}
                            onChange={e => this.setState({todo: e.target.value})} 
                            required 
                        />
                    </label>
                    <button type="submit">Submit</button>
                    <button onClick={() => this.props.clearTodos()}>Clear Completed Todos</button>
                </form>
            </div>
        )
    }
}
