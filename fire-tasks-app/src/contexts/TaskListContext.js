import React, { createContext, useState, useEffect } from "react";

import { tasksRef } from "../config/firebase";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [sortOrder, setSortOrder] = useState(true);

  useEffect(() => {
    // Creating a subscription to Firestore:
    const unsubscribe = tasksRef
      .orderBy("priority", "desc")
      .onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(newTasks);
      });

    // Cleaning the database when the application starts:
    tasksRef.get().then((snapshot) => {
      snapshot.forEach((data) => {
        data.ref.delete();
      });
    });

    // Simulating componentWillUnmount:
    return () => unsubscribe();
  }, []);

  const addTask = (title, priority) => {
    tasksRef.add({ title: title, priority: priority }).then(() => {
      setSortOrder(false);
    });
  };

  const removeTask = (id) => {
    tasksRef.doc(id).delete();
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (id, title, priority) => {
    tasksRef
      .doc(id)
      .update({ title: title, priority: priority })
      .then(() => {
        setEditItem(null);
      });
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
        setEditItem,
        sortTasks,
        sortOrder,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
