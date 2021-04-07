import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Todos: []
    }
  }
  handleTodo = (todo) => {
    this.setState(
      {Todos: [...this.state.Todos, {name: todo, id: Date.now(), completed: false}]}
    )
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.Todos}/>
        <TodoForm handleTodo={this.handleTodo}/>
      </div>
    );
  }
}

export default App;
