import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import useTasksLocalStorage from './useTasksLocalStorage'

const useTasks = () => {
  const {
    savedTasks,
    saveTasks,
  } = useTasksLocalStorage()
  const [tasks, setTasks] = useState(savedTasks ?? [
    {id: 'task-1', title: 'Купить молоко', isDone: false},
    {id: 'task-2', title: 'Пукить кококо', isDone: true},
    {id: 'task-3', title: 'Кукить момомо', isDone: false},
  ])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  
  const newTaskInputRef = useRef(null)

  //Мимоизируем функцию, чтобы ее ссылка не создавалась заново при каждом рендере
  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm('Are you sure you want to delete all?');
    
    if (isConfirmed) {
      setTasks([]);
    }
  }, [])

  //Мимоизируем функцию, чтобы ее ссылка не создавалась заново при каждом рендере
  const deleteTask = useCallback((taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    )
  }, [tasks])

  //Мимоизируем функцию, чтобы ее ссылка не создавалась заново при каждом рендере
  const toggleTaskComplete = useCallback((taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {...task, isDone}
        }
        return task
      })
    )
  }, [tasks])

  const addTask = useCallback((title) => {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title,
        isDone: false,
      }

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskTitle('');
      setSearchQuery('');
      newTaskInputRef.current.focus()
  }, [])

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks, saveTasks])

  useEffect(() => {
    newTaskInputRef.current.focus()
  },[])
  
  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    return clearSearchQuery.length > 0
    ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
    : null
  }, [searchQuery, tasks])
  
  return {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
  }
}

export default useTasks