import React from 'react';

const TodoForm = ({ handleSubmit, handleChange }) => {
  return (
    <div className="todo-form">
      <form onSubmit={() => handleSubmit(val)}>
        <input type="text" onChange={() => handleChange(input)} />
      </form>
    </div>
  );
};

export default TodoForm;