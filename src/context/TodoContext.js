"use client";
import { createContext, useEffect, useState } from "react";
const TodoContext = createContext();
export { TodoContext };
const TodoProvider = ({ children }) => {
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify([
        { id: new Date().getTime(), taskName: "new task" },
        { id: new Date().getTime(), taskName: "old task" },
      ])
    );
  }, []);
  const lists = JSON.parse(localStorage?.getItem("tasks"));
  const addTask = (newTask) => {
    if (typeof window) {
      // setTasks([...tasks, newTask]);
      localStorage?.setItem("tasks", JSON.stringify([...lists, newTask]));
    }
  };
  const deleteTask = (taskId) => {
    if (typeof window) {
      const filtered = lists?.filter((task) => task.id !== taskId);
      window?.localStorage?.setItem("tasks", JSON.stringify(filtered));
    }
  };
  const [tasks, setTasks] = useState([...lists]);
  useEffect(() => {
    setTasks(lists);
  }, [lists]);
  return (
    <TodoContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
