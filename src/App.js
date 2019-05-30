import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';
import Storage from './helpers/localStorage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.storage = new Storage('todos');
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      value: ''
    };
  }

  componentDidUpdate() {
    this.storage.reset();
    this.state.todos.forEach(todo => this.storage.add(todo));
  }

  componentDidMount() {
    const itemsInStore = this.storage.allItems;
    if (itemsInStore.length > 0) {
      this.setState({ todos: itemsInStore });
    }
  }
  clearForm() {
    this.setState({ todos: [] });
    this.setState({ value: '' });
  }

  todoClick(id) {
    let todosCopy = this.state.todos;
    const clicked = todosCopy.find(todo => todo.id === +id);
    const index = todosCopy.findIndex(todo => todo.id === +id);
    clicked.completed = !clicked.completed;
    todosCopy[index] = clicked;
    this.setState({ todos: todosCopy });
  }

  handleChange(input) {
    this.setState({ value: input });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      completed: false,
      task: this.state.value,
      id: Date.now()
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
    this.setState({ value: '' });
  }
  render() {
    return (
      <div className="app-container">
        <TodoList
          todos={this.state.todos}
          todoClick={e => this.todoClick(e.target.id)}
        />
        <TodoForm
          handleChange={e => this.handleChange(e.target.value)}
          handleSubmit={e => this.handleSubmit(e)}
          inputValue={this.state.value}
          clearForm={() => this.clearForm()}
        />
      </div>
    );
  }
}

export default App;
