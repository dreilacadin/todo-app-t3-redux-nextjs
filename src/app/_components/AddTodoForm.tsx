"use client";

import { addTodo } from "~/lib/features/todos/todoSlice";
import { useAppDispatch } from "~/lib/hooks";
import { createId } from "@paralleldrive/cuid2";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { DatePicker } from "~/app/ui/datepicker";

export default function AddTodoForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  async function createTodo(formData: FormData) {
    const schema = z.object({
      title: z.string().trim().min(1, { message: "Title is required" }),
      description: z
        .string()
        .trim()
        .min(1, { message: "Description is required" }),
      date: z.string(),
    });

    const rawFormData = {
      title: formData.get("title"),
      description: formData.get("description"),
      date: formData.get("date"),
    };

    try {
      const parsed = schema.parse(rawFormData);
      dispatch(
        addTodo({
          id: createId(),
          title: parsed.title,
          description: parsed.description,
          status: "pending",
          dueDate: parsed.date,
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
      <h2 className="border-b border-slate-100 pb-2 text-xl">Add Todo</h2>
      <form className="flex flex-col space-y-4 py-4" action={createTodo}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="title">Title</label>
          <input
            className="rounded-lg border p-2"
            type="text"
            id="title"
            name="title"
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
            placeholder="Do a Todo App using NextJS"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="date">Due Date</label>
          <DatePicker name="date" />
        </div>
        <button className="rounded bg-indigo-600 p-4 text-white" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}
