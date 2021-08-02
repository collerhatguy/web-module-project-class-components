import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Todos: JSON.parse(localStorage.getItem("todos")) || [],
    }
  }
  // for creating new todos
  handleTodo = todo => {
    this.setState(
      { 
        Todos: [
          ...this.state.Todos, 
          { 
            task: todo, 
            id: Date.now(), 
            completed: false
          }
        ]
      }
    )
  }
  // for deleting completed todos
  clearCompletedTodos = () => this.setState({ 
    Todos: this.state.Todos.filter(todo => !todo.completed)
  })
  // for checking a todo
  checkTodo = checkedTodo => {
    this.setState({Todos: this.state.Todos.map(todo => 
      todo.id === checkedTodo.id ? {...todo, completed: !todo.completed} : todo
    )})
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.Todos !== this.state.Todos) localStorage.setItem("todos", JSON.stringify(this.state.Todos))
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
