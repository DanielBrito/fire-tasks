import React, { useState } from "react";

import Form from "./components/Form";
import Task from "./components/Task";

import { Container, Header, FireIcon, SortButton, SortIcon } from "./styles";

function App() {
  const initialTasks = [
    { id: "001", name: "Learn React", priority: "5" },
    { id: "002", name: "Learn Styled Components", priority: "2" },
    { id: "003", name: "Learn Firebase", priority: "4" },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [sortOrder, setSortOrder] = useState(true);

  const addTask = (task) => {
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleSort = () => {
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
    <Container>
      <Header>
        <span>
          <FireIcon />
          Fire Tasks
        </span>
      </Header>
      <Form addTask={addTask} />
      <SortButton onClick={handleSort}>
        <SortIcon />
        Sort by Priority
      </SortButton>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            priority={task.priority}
            removeTask={removeTask}
          />
        );
      })}
    </Container>
  );
}

export default App;
