import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TaskListContext } from "../../contexts/TaskListContext";

import {
  Form,
  Input,
  AddButton,
  AddIcon,
  SaveIcon,
  PrioritySelector,
  CancelButton,
  CancelIcon,
} from "./styles";

const TaskForm = () => {
  const { addTask, editTask, editItem, setEditItem } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("0");
  const [cancel, setCancel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      if (title.trim() === "" || priority === "0") {
        toast.error("Hmm... Something is missing");
      } else {
        addTask(title, priority);
        toast.success("Task successfully saved");
        setTitle("");
        setPriority("0");
      }
    } else {
      if (title.trim() === "" || priority === "0") {
        toast.error("Hmm... Something is missing");
      } else {
        if (!cancel) {
          editTask(editItem.id, title, priority);
          toast.success("Changes successfully saved");
        }
        setEditItem(null);
        setCancel(false);
        setTitle("");
        setPriority("0");
      }
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setPriority(editItem.priority);
    } else {
      setTitle("");
      setPriority("0");
    }
  }, [editItem]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        maxLength="130"
        placeholder="Write a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <PrioritySelector
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
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
      <AddButton type="submit" title="Add task">
        {editItem ? <SaveIcon /> : <AddIcon />}
      </AddButton>
      {editItem && (
        <CancelButton
          type="submit"
          title="Cancel"
          onClick={() => setCancel(true)}
        >
          <CancelIcon />
        </CancelButton>
      )}
    </Form>
  );
};

export default TaskForm;
