import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Input,
  AddButton,
  AddIcon,
  PrioritySelector,
} from "./styles";

const Form = (props) => {
  const { addTask } = props;
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("0");

  const writeTask = () => {
    if (taskName.trim() === "" || taskPriority === "0") {
      toast.error("Hmm... There is something missing");
    } else {
      addTask({
        id: `${Math.floor(Math.random() * 9999)}`,
        name: taskName,
        priority: taskPriority,
      });
      setTaskName("");
      setTaskPriority("0");
    }
  };

  return (
    <Container>
      <Input
        maxLength="130"
        placeholder="Write a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <PrioritySelector
        value={taskPriority}
        onChange={(e) => setTaskPriority(e.target.value)}
      >
        <option value="0" disabled>
          Task priority
        </option>
        <option value="1">1 - Very Low</option>
        <option value="2">2 - Low</option>
        <option value="3">3 - Medium</option>
        <option value="4">4 - High</option>
        <option value="5">5 - Very High</option>
      </PrioritySelector>
      <AddButton title="Add task" onClick={writeTask}>
        <AddIcon />
      </AddButton>
    </Container>
  );
};

export default Form;
