import { createId } from "@paralleldrive/cuid2";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Todo } from "~/lib/types";

const initialState: Todo[] = [
  {
    id: createId(),
    title: "Wash the dishes",
    description: "Clear dirty dishes",
    status: "pending",
    dueDate: new Date("2024-11-13").toISOString(),
  },
  {
    id: createId(),
    title: "Take out the trash",
    description: "Garbage truck is here, hurry!",
    status: "pending",
    dueDate: new Date("2024-11-14").toISOString(),
  },
  {
    id: createId(),
    title: "Do the laundry",
    description: "Time to use those suds!",
    status: "in progress",
    dueDate: new Date("2024-11-15").toISOString(),
  },
  {
    id: createId(),
    title: "Water the plants",
    description: "Make the plants go grow grow grow!",
    status: "completed",
    dueDate: new Date("2024-11-11").toISOString(),
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
        dueDate: action.payload.dueDate,
      });
    },
    editTodo(state, action: PayloadAction<Todo>) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        const { title, description, status, dueDate } = action.payload;
        todo.title = title;
        todo.description = description;
        todo.status = status;
        todo.dueDate = dueDate;
      }
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
