import React from 'react';

const TodoForm = ({ handleSubmit, handleChange, inputValue, clearForm, clearCompleted }) => {
  return (
    <div className="todo-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={e => handleChange(e)} value={inputValue} />
      </form>
      <button onClick={() => clearForm()}>Clear Form</button>
      <button onClick={() => clearCompleted()}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
