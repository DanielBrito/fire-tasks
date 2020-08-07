import React from "react";

import TaskListContextProvider from "./contexts/TaskListContext";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import SortButton from "./components/SortButton";
import TaskList from "./components/TaskList";

import { Container } from "./styles";

const App = () => {
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
