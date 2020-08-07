import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);
  const [sortOrder, setSortOrder] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, priority) => {
    setTasks([{ id: uuid(), title: title, priority: priority }, ...tasks]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (id, title, priority) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { id, title, priority } : task
    );

    setTasks(newTasks);
    setEditItem(null);
  };

  const sortTasks = () => {
    var sortedTasks;
    if (sortOrder) {
      sortedTasks = [...tasks].sort((a, b) => {
        return b.priority - a.priority;
      });
    } else {
      sortedTasks = [...tasks].sort((a, b) => {
        return a.priority - b.priority;
      });
    }
    setTasks(sortedTasks);
    setSortOrder(!sortOrder);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        findItem,
        editTask,
        editItem,
        sortTasks,
        sortOrder,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
