"use client";

import Link from "next/link";
import { deleteTodo } from "~/lib/features/todos/todoSlice";
import { useAppDispatch } from "~/lib/hooks";
import { Todo } from "~/lib/types";
import { cn } from "~/lib/utils";

export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();

  function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this task?")) return;

    try {
      dispatch(deleteTodo(id));
    } catch (err) {
      console.error(err);
    }
  }

  if (!todo) {
    return null;
  }

  return (
    <tr
      className={cn(new Date(todo.dueDate) < new Date() && "bg-indigo-600")}
      key={todo.id}
    >
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{new Date(todo.dueDate).toLocaleDateString()}</td>
      <td>{todo.status.toUpperCase()}</td>
      <td>
        <div className="flex justify-center space-x-4">
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
  );
}
