import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          todoClick={e => this.todoClick(e.target.id)}
        />
      </div>
    );
  }
}

export default App;
