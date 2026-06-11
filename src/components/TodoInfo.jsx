import { memo, useContext, useMemo } from "react";
import { TasksContext } from "../context/TasksContext";

const TodoInfo = () => {
  const {
    tasks,
    deleteAllTasks,
  } = useContext(TasksContext);

  const done = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone).length
  }, [tasks])

  const total = tasks.length
   const hasTasks = total > 0;

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {done} from {total}
      </div>
      {hasTasks && (
        <button
        className="todo__delete-all-button"
        type="button"
        onClick={deleteAllTasks}
        >
          Delete all
        </button>
      )}
    </div>
  );
};

// Мимоизируем компонент, чтобы избежать лишних перерендеров при неизменных props
export default memo(TodoInfo);
