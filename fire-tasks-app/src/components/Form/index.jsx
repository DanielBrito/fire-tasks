import React from "react";

import {
  Container,
  Input,
  AddButton,
  AddIcon,
  PrioritySelector,
} from "./styles";

const Form = () => {
  return (
    <Container>
      <Input maxLength="130" placeholder="New task..." />
      <PrioritySelector defaultValue="1">
        <option value="0" disabled>
          Task priority
        </option>
        <option value="1">1 - Very Low</option>
        <option value="2">2 - Low</option>
        <option value="3">3 - Medium</option>
        <option value="4">4 - High</option>
        <option value="5">5 - Very High</option>
      </PrioritySelector>
      <AddButton title="Add task">
        <AddIcon />
      </AddButton>
    </Container>
  );
};

export default Form;
