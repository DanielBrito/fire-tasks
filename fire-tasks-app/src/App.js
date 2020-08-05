import React from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { Container, Header, FireIcon } from "./styles";

function App() {
  return (
    <Container>
      <Header>
        <FireIcon />
        Fire Tasks
      </Header>
      <Form />
      <TaskList />
    </Container>
  );
}

export default App;
