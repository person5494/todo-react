import { useEffect, useState } from 'react';
import tasksAPI from '@/shared/api/tasks';
import ThemeToggleButton from '../../shared/theme/ui/ThemeToggleButton';
import styles from './TaskPage.module.scss';

const TaskPage = (props) => {
  const { params } = props;
  const taskId = params.id;

  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    tasksAPI
      .getById(taskId)
      .then((taskData) => {
        setTask(taskData);
        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [taskId]);

  if (isLoading) {
    return (
      <div className={styles.taskPage}>
        <ThemeToggleButton className={styles.taskPageThemeButton} />
        <div className={styles.status}>Loading...</div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={styles.taskPage}>
        <ThemeToggleButton className={styles.taskPageThemeButton} />
        <div className={styles.error}>Task not found!</div>
      </div>
    );
  }

  return (
    <div className={styles.taskPage}>
      <ThemeToggleButton className={styles.taskPageThemeButton} />
      <h1 className={styles.title}>{task.title}</h1>
      <p className={styles.text}>
        {task.isDone ? 'Task completed' : `Task not completed`}
      </p>
    </div>
  );
};

export default TaskPage;
