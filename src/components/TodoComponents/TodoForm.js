import React from 'react';

const TodoForm = ({ handleSubmit, handleChange }) => {
  return (
    <div className="todo-form">
      <form onSubmit={() => handleSubmit()}>
        <input type="text" onChange={() => handleChange()} />
      </form>
    </div>
  );
};

export default TodoForm;
