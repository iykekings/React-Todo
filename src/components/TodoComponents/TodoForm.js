import React from 'react';

const TodoForm = ({
  handleSubmit,
  handleChange,
  inputValue,
  clearForm,
  clearCompleted
}) => {
  return (
    <div className="todo-form">
      <form onSubmit={e => handleSubmit(e)}>
        <input
          placeholder="Add todo here"
          type="text"
          onChange={e => handleChange(e)}
          value={inputValue}
        />
      </form>
      <button onClick={() => clearForm()}>Clear Todos</button>
      <button onClick={() => clearCompleted()}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
