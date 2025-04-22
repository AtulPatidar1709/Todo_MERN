import { createContext, useContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

const PORT = import.meta.env.VITE_BACKEND_URI || 'http://localhost:8080';

// console.log(PORT)

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {

      const res = await fetch(`${PORT}/tasks/` , {
        method: 'GET'
      });

      const data = await res.json();
      if (data.success) setTasks(data.data);
      
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const addTask = async (taskName) => {
    try {
      const res = await fetch(`${PORT}/tasks/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskName })
      });
      const data = await res.json();
      if (data.success) {
        fetchTasks();
        // console.log(data.task)
      }
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`${PORT}/tasks/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success) {
        setTasks(prev => prev.filter(task => task._id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Update task
  const updateTask = async (id, updatedFields) => {
    try {
      const res = await fetch(`${PORT}/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFields)
      });
      const data = await res.json();
      if (data.success) {
        setTasks(prev =>
          prev.map(task => task._id === id ? { ...task, ...updatedFields } : task)
        );
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <TaskContext.Provider value={{ fetchTasks, addTask, deleteTask, updateTask, tasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
