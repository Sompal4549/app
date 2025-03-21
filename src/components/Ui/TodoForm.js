"use client";
import React, { useContext, useState } from "react";
// import { TodoContext } from "../../context/TodoContext";
import { Input } from "@chakra-ui/react";
const TodoForm = () => {
  const [newTask, setNewTask] = useState("");
  const { addTask } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: new Date().getTime(), taskName: newTask });
    setNewTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Type your task"
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default TodoForm;
