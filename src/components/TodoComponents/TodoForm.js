import React from 'react';

const TodoForm = ({ handleSubmit, handleChange, inputValue }) => {
  return (
    <div className="todo-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={e => handleChange(e)} value={inputValue} />
      </form>
    </div>
  );
};

export default TodoForm;
