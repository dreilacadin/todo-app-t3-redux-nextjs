import { createId } from "@paralleldrive/cuid2";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Todo } from "~/lib/types";

const initialState: Todo[] = [
  {
    id: createId(),
    title: "Wash the dishes",
    description: "Clear dirty dishes",
    status: "pending",
  },
  {
    id: createId(),
    title: "Take out the trash",
    description: "Garbage truck is here, hurry!",
    status: "pending",
  },
  {
    id: createId(),
    title: "Do the laundry",
    description: "Time to use those suds!",
    status: "in progress",
  },
  {
    id: createId(),
    title: "Water the plants",
    description: "Make the plants go grow grow grow!",
    status: "completed",
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
