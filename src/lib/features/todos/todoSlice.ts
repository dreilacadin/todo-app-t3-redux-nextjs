import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Status = "pending" | "in progress" | "completed";

interface Todo {
  id: string;
  title: string;
  description: string;
  status: Status;
}

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
    // todoToggled(state, action) {
    //   const todo = state.find((todo) => todo.id === action.payload)
    //   todo.completed = !todo.completed
    // },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
