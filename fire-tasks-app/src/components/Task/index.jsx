import React from "react";

import {
  Container,
  RemoveButton,
  EditButton,
  Description,
  Priority,
} from "./styles";

const Task = () => {
  return (
    <Container>
      <Priority>1</Priority>
      <RemoveButton title="Remove" />
      <EditButton title="Edit" />
      <Description>
        Lorem ipsum dolor sit amet consectur a adipisicing elit. Consectetur
        quidem quam ducimus nostrum necessitatibus sunt nobis! Fuga velit
        mollitia iure omnis quo suscipit accusamus, commodi itaque adipisci
        totam animi facilis!
      </Description>
    </Container>
  );
};

export default Task;
