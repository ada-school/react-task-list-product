import React, { useContext, useState } from "react";

const TasksContext = React.createContext();

const TASKS_LOCALSTORAGE_KEY = "tasks";

export const TasksProvider = ({ children }) => {
  const initialTasks = JSON.parse(
    localStorage.getItem(TASKS_LOCALSTORAGE_KEY) ?? "[]"
  );
  const [tasks, setTasks] = useState(initialTasks);

  const value = {
    tasks,
    setTasks: (tasks) => {
      localStorage.setItem(TASKS_LOCALSTORAGE_KEY, JSON.stringify(tasks));
      setTasks(tasks);
    },
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used inside a TaskProvider");
  }

  const { tasks, setTasks } = context;

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  return { tasks, addTask, toggleTask, setTasks };
};
