import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange

  } = props;

  const HasTasks = true;

  if (!HasTasks) {
    return <div className="todo__empty-message"></div>;
  }
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
        className="todo__item"
        key={task.id}
        onDeleteTaskButtonClick={onDeleteTaskButtonClick}
        onTaskCompleteChange={onTaskCompleteChange}
        id={task.id}
        title={task.title}
        isDone={task.isDone}
        />
      ))}

    </ul>
  );
};

export default TodoList;
