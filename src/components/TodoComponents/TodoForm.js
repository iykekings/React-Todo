import React from 'react';

const TodoForm = ({ handleSubmit, handleChange }) => {
  return (
    <div className="todo-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={e => handleChange(e)} />
      </form>
    </div>
  );
};

export default TodoForm;
