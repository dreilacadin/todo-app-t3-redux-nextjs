"use client";

import { useEffect, useState } from "react";
import TodoItem from "~/app/_components/TodoItem";
import { useAppSelector } from "~/lib/hooks";
import { type Status, type Todo } from "~/lib/types";

export default function TodoList({
  filter,
  query,
}: {
  filter: Status | "all";
  query: string;
}) {
  const todos = useAppSelector((state) => state.todos);

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // if status filter is set to 'all', set filteredTodos to original todos State to show all todos
    if (filter === "all") {
      return setFilteredTodos(todos);
    }
    // Else, filter the todos using the passed status filter
    setFilteredTodos(todos.filter((todo) => todo.status === filter));
  }, [filter, todos]);

  useEffect(() => {
    if (filter !== "all" && !query) return;
    // if query string is empty, do nothing
    if (query.trim().length === 0) {
      return setFilteredTodos(todos);
    }

    setFilteredTodos(
      todos.filter(
        (todo) =>
          todo.title.toLowerCase().includes(query) ||
          todo.description.toLowerCase().includes(query),
      ),
    );
  }, [query, todos, filter]);

  if (todos.length === 0) {
    return <div>loading...</div>;
  }

  if (todos.length <= 0) {
    return (
      <div className="mt-4 flex flex-col items-center">
        <p className="text-lg">No tasks yet</p>
        <p>Create a new task </p>
      </div>
    );
  }

  return (
    <table className="w-full border [&_td]:border [&_td]:p-4 [&_th]:border">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
}
