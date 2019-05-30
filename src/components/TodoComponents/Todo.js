import React from 'react';

const Todo = ({ id, task, completed, todoClick }) => {
  return (
    <li
      id={id}
      className={completed ? 'complete' : 'not-completed'}
      onClick={e => todoClick(e)}
    >
      {task}
    </li>
  );
};

export default Todo;
