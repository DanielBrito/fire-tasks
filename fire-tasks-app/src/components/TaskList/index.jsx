import React from "react";
import Task from "../Task";
import { Container, SortButton, SortIcon } from "./styles";

const TaskList = () => {
  return (
    <Container>
      <SortButton>
        <SortIcon />
        Sort by Priority
      </SortButton>
      <Task />
      <Task />
      <Task />
    </Container>
  );
};

export default TaskList;
