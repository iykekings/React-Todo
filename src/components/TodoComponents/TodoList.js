import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = ({ todos, todoClick }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo
          completed={todo.completed}
          todoClick={todoClick}
          id={todo.id}
          key={`${todo.id}${todo.task}`}
          task={todo.task}
        />
      ))}
    </ul>
  );
};

export default TodoList;
