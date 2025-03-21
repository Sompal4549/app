"use client";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";

import { Box, List, ListItem } from "@chakra-ui/react";
import { setAuthState } from "@/lib/features/auth/authSlice";
import { addTodo, toggleTodo } from "@/lib/features/todo/todosSlice";
import ScrollTriggered from "../ScrollAnimation/ScrollTrigered";
export async function submitForm(query) {
  await new Promise((res) => setTimeout(res, 2000));
}

const Todo = () => {
  const authState = useAppSelector((state) => state.auth.authState);
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  function search(formData) {
    const query = formData.get("query");
    dispatch(addTodo(query));
    console.log(todos);
  }
  return (
    <Box>
      {/* <ScrollTriggered /> */}
      <div>
        <button onClick={() => dispatch(setAuthState(true))}>Log in</button>
        <button onClick={() => dispatch(setAuthState(false))}>Log out</button>
      </div>
      <div className="flex gap border border-1 border-black p-20">
        You are now {authState ? "Logged  In" : "Logged Out"}
      </div>
      <form action={search}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
      <Box>
        <List>
          {todos.todos.map((item) => {
            return (
              <ListItem
                key={item.todo}
                textDecor={item.completed && "line-through"}
                onClick={() => {
                  dispatch(toggleTodo(item.id));
                  console.log(todos);
                }}
              >
                {item.todo}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};
export default Todo;
