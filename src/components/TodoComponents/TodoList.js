import Todo from './Todo';

const TodoList = todos => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo
          completed={todo.completed}
          todoClick={todo.todoClick}
          id={todo.id}
          task={todo.task}
        />
      ))}
    </ul>
  );
};

export default TodoList;
