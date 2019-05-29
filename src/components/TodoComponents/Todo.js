const Todo = ({ id, task, completed, todoClick }) => {
  return (
    <li
      id={id}
      className={completed ? 'complete' : ''}
      className="todo-item"
      onClick={e => todoClick(e)}
    >
      {task}
    </li>
  );
};

export default Todo;
