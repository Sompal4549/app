import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface Todo {
    todo:string,
    id:number,
    completed:boolean
}
export interface TodoState {
    todos: Todo[];
}
const initialState : TodoState ={
    todos:[]
};
let count = 0;
export const todosSlice = createSlice({
    name:"todos",
    initialState,
    reducers:(create)=>({
        addTodo:create.reducer((state, action:PayloadAction<string>)=>{
            state.todos = [...state.todos,{todo:action.payload, id:count++, completed:false}]
        }),
        toggleTodo: create.reducer((state, action:PayloadAction<number>)=>{
            state.todos[action.payload].completed= !state.todos[action.payload].completed
        })
    })
})
export const {addTodo, toggleTodo} = todosSlice.actions;
export const todoReducer = todosSlice.reducer;