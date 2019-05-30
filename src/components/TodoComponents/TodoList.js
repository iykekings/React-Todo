import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, todoClick }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo
          completed={todo.completed}
          todoClick={todoClick}
          id={todo.id}
          key={todo.id}
          task={todo.task}
        />
      ))}
    </ul>
  );
};

export default TodoList;
