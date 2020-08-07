import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TaskListContext } from "../../contexts/TaskListContext";

import { Button, SortIcon } from "./styles";

const SortButton = () => {
  const { sortTasks, sortOrder, tasks } = useContext(TaskListContext);

  const handleSort = () => {
    sortTasks();
    if (tasks.length === 0) {
      toast.warning("No tasks to be sorted");
    } else {
      sortOrder
        ? toast.info("Most important first")
        : toast.info("Less important first");
    }
  };

  return (
    <>
      <Button onClick={() => handleSort()}>
        <SortIcon />
        Sort by Priority
      </Button>
    </>
  );
};

export default SortButton;
