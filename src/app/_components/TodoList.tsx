"use client";

import Link from "next/link";
import { deleteTodo } from "~/lib/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this task?")) return;

    try {
      dispatch(deleteTodo(id));
    } catch (err) {
      console.error(err);
    }
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
            <td>
              <div className="flex space-x-4">
                <Link href={`/edit-todo/${todo.id}`}>
                  <button className="text-blue-500">Edit</button>
                </Link>
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
