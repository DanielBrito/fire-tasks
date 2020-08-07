import React, { useEffect } from "react";

import TaskListContextProvider from "./contexts/TaskListContext";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import SortButton from "./components/SortButton";
import TaskList from "./components/TaskList";

import { Container } from "./styles";

const App = () => {
  useEffect(() => {
    // Cleaning data when application starts:
    localStorage.clear();
  }, []);

  return (
    <TaskListContextProvider>
      <Container>
        <Header />
        <TaskForm />
        <SortButton />
        <TaskList />
      </Container>
    </TaskListContextProvider>
  );
};

export default App;
