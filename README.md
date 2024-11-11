# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Todo App Checklist:

1. Core To-Do List Features

   - [x] Users can add new tasks with a title and description.
   - [x] Tasks should have a status: Pending, In Progress, Completed.
   - [x] Users can edit and delete tasks.
   - [x] Users can filter tasks by their status (Pending, In Progress,
         Completed).
   - [x] Implement a search bar to find tasks by title.
   - [x] Tasks should have due dates, and tasks that are past the due date
         should be highlighted.

2. State Management:
   - [x] Implement a state management solution (Redux Toolkit)
   - [x] Ensure tasks and their statuses are managed globally, while the UI state (filters, search query) can be managed locally.
3. Performance Optimizations
   - [] Handle large numbers of tasks efficiently by virtualizing the list of
     tasks (e.g., using react-window or react-virtualized).
   - [x] Optimize re-rendering to avoid unnecessary updates when adding,
         editing, or reordering tasks (e.g., with React.memo).

## Libraries used

1. T3 App
2. Redux toolkit state management
3. Jest and React Testing Library

### How to launch the app:

- Install `pnpm` first in your system if you don't have it yet

```bash
# Install dependencies
pnpm install
# Run dev server
pnpm dev
# Run tests
pnpm test:watch
```

### Part 3: Code Review Questions

1. State Management:
   Why did you choose the specific state management approach? How
   would you scale it for a larger application?

- To be honest, I initially chose `zustand` for this project as It was so easy to set it up and get it running. I did however ran into some roadblocks with regards to its type support that's why I swapped it out in favor of `Redux Toolkit` which I found to be quite robust and had awesome typescript support. I also loved the slices pattern and just using selectors and dispatchers on a per need basis, meaning you don't need to import the whole store whenever you need to access global state.
- If I am to scale this for a larger application though, to be honest, I would likely prefer to persist data in a database or such, expose some APIs to mutate the data and let Server Components do it's Caching magic ;)
- Since a state management tool is a requirement for this project, some components needed to be converted to Client Components, which I feel like, at the state of the current NextJS framework, is becoming a bit of an anti-pattern. But it's still useful nonetheless for storing Global immutable state which I feel like should be the trend for global state.

2. Performance Optimization:
   What techniques did you use to optimize the performance of the
   application? How do they work?

- I haven't done any optimizations yet as the todo app is not big enough to need it yet.
- Also, Most of the components are React Server Components which are cached by default.
- `useMemo` and `useCallback` are optimization tools but they also come with a bit of performance costs so I think they should be used only when needed, like most optimizations, it shouldn't be added unless there's a clear reason to do so. My React Dev Tools profiler shows that there's no hot spot in the app, and until then, I've yet to use them. [YAGNI Principle.](https://www.geeksforgeeks.org/what-is-yagni-principle-you-arent-gonna-need-it/)

3. Testing Strategy:
   How do you decide which parts of the application need to be unit
   tested? What are your guidelines?

- To be honest, Unit testing is my waterloo and I'd like to learn more and experience more about this hopefully through you. My previous company didn't really focus too much on unit testing and focused on basic integration testing and manual testing. So I won't pretend that I'm a testing wizard if I'm not, just that I've setup a few basic tests for some of the core components and a working test environment which I learned how to do through my own side projects.

4. Code Structure:
   Explain how you organized your project structure and why.

- Project structure is quite similar to the base [NextJS App Router](https://nextjs.org/docs/app/getting-started/project-structure) defaults. Just that I added some folders to allow:
  1. [Parallel Routing](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
  2. And a `lib` folder which houses my `stores`, `utils` and `hooks` files and directories.
