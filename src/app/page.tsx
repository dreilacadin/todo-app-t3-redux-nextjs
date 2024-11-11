import Link from "next/link";
import { Suspense } from "react";
import SearchFilter from "~/app/_components/SearchFilter";
import TodoFilter from "~/app/_components/TodoFilter";
import TodoList from "~/app/_components/TodoList";
import { type Status } from "~/lib/types";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ filter: Status | "all"; query: string }>;
}) {
  const { filter = "all", query = "" } = await searchParams;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex max-w-screen-md flex-col items-center justify-center gap-12 px-4 py-16">
        <Link href="/">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-[3rem]">
            <span className="text-[hsl(280,100%,70%)]">Todo</span> App
          </h1>
        </Link>
        <div className="flex w-full flex-col">
          <div className="mb-4 flex items-center justify-between">
            <Link href="/add-todo">
              <button className="rounded-lg bg-indigo-500 p-2">Add Todo</button>
            </Link>
            <SearchFilter />
            <TodoFilter filter={filter} />
          </div>
          <TodoList filter={filter} query={query} />
        </div>
      </div>
    </main>
  );
}
