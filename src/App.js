import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Todos: [{task: "stuff", id: 1, completed: false}]
    }
  }
  handleTodo = (todo) => {
    this.setState(
      {Todos: [...this.state.Todos, {task: todo, id: Date.now(), completed: false}]}
    )
  }
  clearCompletedTodos = () => {
    this.setState(
      {Todos: this.state.Todos.filter(todo => {
        return (todo.completed === false);
      })}
    )
  }
  checkTodo = (checkedTodo) => {
    this.setState({Todos: this.state.Todos.map(todo => {
      if (todo.id == checkedTodo.id) return {...todo, completed: !todo.completed}
      return todo;
    })})
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.Todos} checkTodo={this.checkTodo}/>
        <TodoForm handleTodo={this.handleTodo} clearTodos={this.clearCompletedTodos}/>
      </div>
    );
  }
}

export default App;
