import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todoSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todosReducer,
    },
  });
};

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  todos: todosReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RState = ReturnType<typeof rootReducer>;
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
