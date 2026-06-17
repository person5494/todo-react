import { memo, useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TasksContext } from "../../context/TasksContext";

const TodoList = (props) => {
  const { styles } = props

  const {
    tasks,
    filteredTasks,
  } = useContext(TasksContext);

  const HasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!HasTasks) {
    return <div className={styles.emptyMessage}>There are not tasks yet</div>;
  }

  if (HasTasks && isEmptyFilteredTasks) {
    return <div className={styles.emptyMessage}>Tasks not found</div>;
  }

  return (
    <ul className={styles.list}>
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
        className={styles.item}
        key={task.id}
        id={task.id}
        title={task.title}
        isDone={task.isDone}
        />
      ))}

    </ul>
  );
};

export default memo(TodoList);
