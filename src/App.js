import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
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
      ]
    };
  }

  todoClick(id) {
    const clicked = this.state.todos.find(todo => todo.id === +id);
    clicked.completed = !clicked.completed;
    this.setState({ ...this.state.todos, clicked });
  }

  handleChange(input) {
    console.log(input);
  }
  handleChange() {
    console.log(input);
  }
  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          todoClick={e => this.todoClick(e.target.id)}
        />
        <TodoForm handleChange={} handleSubmit={} />
      </div>
    );
  }
}

export default App;
