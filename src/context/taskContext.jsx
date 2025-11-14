import { createContext, useContext, useReducer, useState } from 'react';
import tasksReducer from '../reducers/taskreducer';

// Create context
const TasksContext = createContext();

// Create provider
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <TasksContext.Provider value={{ tasks, dispatch, filter, setFilter, filteredTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

// Custom hook to use context
export function useTasks() {
  return useContext(TasksContext);
}