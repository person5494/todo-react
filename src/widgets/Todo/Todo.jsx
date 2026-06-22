import { useContext } from 'react';
import AddTaskForm from '@/features/add-task/AddTaskForm';
import SearchTaskForm from '@/features/search-task/SearchTaskForm';
import TodoInfo from '@/features/stats/TodoInfo';
import { TodoList } from '@/entities/todo';
import Button from '@/shared/ui/Button';
import { TasksRefsContext } from '@/entities/todo';
import ThemeToggleButton from '../../shared/theme/ui/ThemeToggleButton';
import styles from './Todo.module.scss';

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksRefsContext);

  return (
    <div className={styles.todo}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>To Do List</h1>
        <ThemeToggleButton className={styles.todoThemeButton} />
      </div>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TodoInfo styles={styles} />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        First incomplete task
      </Button>
      <TodoList styles={styles} />
    </div>
  );
};

export default Todo;
