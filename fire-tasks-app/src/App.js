import React from "react";

import { Container, Header, FireIcon, TasksList } from "./styles";

import Task from "./components/Task";
import Form from "./components/Form";

function App() {
  return (
    <Container>
      <Header>
        <FireIcon />
        Fire Tasks
      </Header>
      <TasksList>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </TasksList>
    </Container>
  );
}

export default App;
