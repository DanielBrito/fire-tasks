import React from "react";

import {
  Container,
  PriorityLabel,
  RemoveButton,
  EditButton,
  Description,
} from "./styles";

const Task = (props) => {
  const { id, name, priority, removeTask } = props;

  return (
    <Container>
      <PriorityLabel>{priority}</PriorityLabel>
      <RemoveButton title="Remove" onClick={() => removeTask(id)} />
      <EditButton title="Edit" />
      <Description>{name}</Description>
    </Container>
  );
};

export default Task;
