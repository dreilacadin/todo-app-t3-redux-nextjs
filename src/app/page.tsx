import Link from "next/link";
import TodoFilter from "~/app/_components/TodoFilter";
import TodoList from "~/app/_components/TodoList";
import { type Status } from "~/lib/types";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ filter: Status | "all" }>;
}) {
  const { filter = "all" } = await searchParams;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-[3rem]">
          <span className="text-[hsl(280,100%,70%)]">Todo</span> App
        </h1>
        <div className="flex flex-col">
          <div className="mb-4 flex items-center justify-between">
            <TodoFilter />
            <Link href="/add-todo">
              <button className="rounded-lg bg-indigo-500 p-2">Add Todo</button>
            </Link>
          </div>
          <TodoList filter={filter} />
        </div>
      </div>
    </main>
  );
}
