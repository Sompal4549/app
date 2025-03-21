"use client";
import React, { useContext } from "react";
// import { TodoContext } from "../../context/TodoContext";
import { Button, List, ListItem } from "@chakra-ui/react";
import { nanoid } from "nanoid";
const TodoList = () => {
  // const { tasks, deleteTask } = useContext(TodoContext);
  // localStorage.setItem("tasks", [{ id: "1", name: "bharat" }]);
  // const list = localStorage.getItem("tasks");
  // console.log(list[0], "===>");
  // console.log(lists, "tasks");
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={nanoid()}>
          {task.taskName}
          <Button onClick={() => deleteTask(task.id)}>Delete </Button>
        </ListItem>
      ))}
    </List>
  );
};
export default TodoList;
