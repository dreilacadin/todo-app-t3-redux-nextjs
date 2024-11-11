# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Todo App Checklist:

1. Core To-Do List Features

   - [x] Users can add new tasks with a title and description.
   - [x] Tasks should have a status: Pending, In Progress, Completed.
   - [x] Users can edit and delete tasks.
   - [x] Users can filter tasks by their status (Pending, In Progress,
         Completed).
   - [] Implement a search bar to find tasks by title.
   - [] Tasks should have due dates, and tasks that are past the due date
     should be highlighted.

2. State Management:
   - [] Implement a state management solution (Zustand)
   - [] Ensure tasks and their statuses are managed globally, while the UI state (filters, search query) can be managed locally.
3. Performance Optimizations
   - [] Handle large numbers of tasks efficiently by virtualizing the list of
     tasks (e.g., using react-window or react-virtualized).
   - [] Optimize re-rendering to avoid unnecessary updates when adding,
     editing, or reordering tasks (e.g., with React.memo).

## Libraries used

1. T3 App
2. Zustand state management

### How to launch the app:

- pnpm run install
- pnpm run dev
