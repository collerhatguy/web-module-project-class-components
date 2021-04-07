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
  // for creating new todos
  handleTodo = (todo) => {
    this.setState(
      {Todos: [...this.state.Todos, {task: todo, id: Date.now(), completed: false}]}
    )
  }
  // for deleting comleted todos
  clearCompletedTodos = () => {
    this.setState(
      {Todos: this.state.Todos.filter(todo => {
        return (todo.completed === false);
      })}
    )
  }
  // for checking a todo
  checkTodo = (checkedTodo) => {
    this.setState({Todos: this.state.Todos.map(todo => {
      if (todo.id == checkedTodo.id) return {...todo, completed: !todo.completed}
      return todo;
    })})
    console.log(this.state.Todos)
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
