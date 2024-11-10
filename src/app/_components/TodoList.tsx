"use client";

import { useAppSelector } from "~/lib/hooks";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos);

  return (
    <table className="w-full border [&_td]:border [&_td]:p-4 [&_th]:border">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.status.toUpperCase()}</td>
            <td className="flex gap-2">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
