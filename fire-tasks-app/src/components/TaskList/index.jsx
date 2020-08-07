import React, { useContext } from "react";

import { TaskListContext } from "../../contexts/TaskListContext";
import Task from "../Task";

import { Container } from "./styles";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <Container>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </Container>
  );
};

export default TaskList;
