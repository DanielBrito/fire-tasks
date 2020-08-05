import React from "react";
import {
  Container,
  PriorityLabel,
  RemoveButton,
  EditButton,
  Description,
} from "./styles";

const Task = () => {
  return (
    <Container>
      <PriorityLabel>1</PriorityLabel>
      <RemoveButton title="Remove" />
      <EditButton title="Edit" />
      <Description>Implement Fire Tasks</Description>
    </Container>
  );
};

export default Task;
