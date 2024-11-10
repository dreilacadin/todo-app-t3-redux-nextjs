"use client";

import { editTodo } from "~/lib/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { z } from "zod";
import { useRouter } from "next/navigation";
import type { Status } from "~/lib/types";

export default function EditTodoForm({ todoId }: { todoId: string }) {
  const todo = useAppSelector((state) =>
    state.todos.find((todo) => todo.id === todoId),
  );

  const dispatch = useAppDispatch();
  const router = useRouter();

  async function updateTodo(formData: FormData) {
    const schema = z.object({
      title: z.string().trim().min(1, { message: "Title is required" }),
      description: z
        .string()
        .trim()
        .min(1, { message: "Description is required" }),
      status: z.custom<Status>(),
    });

    const rawFormData = {
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
    };

    try {
      const parsed = schema.parse(rawFormData);
      dispatch(
        editTodo({
          id: todo!.id,
          title: parsed.title,
          description: parsed.description,
          status: parsed.status,
        }),
      );
    } catch (e) {
      console.error(e);
    } finally {
      router.back();
    }
  }

  return (
    <div>
      <h2 className="border-b border-slate-100 pb-2 text-xl">Edit Todo</h2>
      <form className="flex flex-col space-y-4 py-4" action={updateTodo}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="title">Title</label>
          <input
            className="rounded-lg border p-2"
            type="text"
            id="title"
            name="title"
            defaultValue={todo?.title}
            placeholder="Create Todo App"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description">Description</label>
          <input
            className="rounded-lg border p-2"
            type="text"
            id="description"
            name="description"
            defaultValue={todo?.description}
            placeholder="Do a Todo App using NextJS"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="status" className="mb-2 block text-sm font-medium">
            Select an option
          </label>
          <select
            id="status"
            name="status"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            defaultValue={todo?.status}
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button className="rounded bg-indigo-600 p-4 text-white" type="submit">
          Edit Todo
        </button>
      </form>
    </div>
  );
}
