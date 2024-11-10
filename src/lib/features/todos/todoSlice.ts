import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Todo } from "~/lib/types";

const initialState: Todo[] = [
  {
    id: "tz4a98xxat96iws9zmbrgj3a",
    title: "Wash the dishes",
    description: "Clear dirty dishes",
    status: "pending",
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
      });
    },
    editTodo(state, action: PayloadAction<Todo>) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        const { title, description, status } = action.payload;
        todo.title = title;
        todo.description = description;
        todo.status = status;
      }
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
