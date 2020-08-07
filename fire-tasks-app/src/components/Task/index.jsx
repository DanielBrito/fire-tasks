import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TaskListContext } from "../../contexts/TaskListContext";

import {
  Container,
  PriorityLabel,
  RemoveButton,
  EditButton,
  Description,
} from "./styles";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);

  const handleRemove = () => {
    removeTask(task.id);
    toast.success("Task successfully removed");
  };

  return (
    <Container>
      <PriorityLabel>{task.priority}</PriorityLabel>
      <RemoveButton title="Remove" onClick={() => handleRemove()} />
      <EditButton title="Edit" onClick={() => findItem(task.id)} />
      <Description>{task.title}</Description>
    </Container>
  );
};

export default Task;
