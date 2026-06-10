import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    filteredTasks,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props;

  const HasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!HasTasks) {
    return <div className="todo__empty-message">There are not tasks yet</div>;
  }

  if (HasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>;
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
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
