import { createContext, useMemo } from 'react';
import useTasks from './useTasks';
import useIncompleteTaskScroll from './useIncompleteTaskScroll';

export const TasksDataContext = createContext({});
export const TasksActionsContext = createContext({});
export const TasksRefsContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
  } = useTasks()

  const {
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
  } = useIncompleteTaskScroll(tasks)

  const dataValue = useMemo(() => ({
        tasks,
        filteredTasks,
        searchQuery,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskId,
  }), [
        tasks,
        filteredTasks,
        searchQuery,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskId,
  ])

    const actionsValue = useMemo(() => ({
        addTask,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        setSearchQuery,
  }), [
        addTask,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        setSearchQuery,
  ])

    const refsValue = useMemo(() => ({
        newTaskInputRef,
        firstIncompleteTaskRef,
  }), [
        newTaskInputRef,
        firstIncompleteTaskRef,
  ])

  return (
    <TasksDataContext.Provider value={dataValue}>
      <TasksActionsContext.Provider value={actionsValue}>
            <TasksRefsContext.Provider value={refsValue}>
                  {children}
            </TasksRefsContext.Provider>
      </TasksActionsContext.Provider>
    </TasksDataContext.Provider>
  );
};
