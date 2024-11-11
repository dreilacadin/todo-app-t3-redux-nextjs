import Form from "next/form";
import { type Status } from "~/lib/types";

export default function TodoFilter({ filter }: { filter: Status | "all" }) {
  return (
    <Form className="flex items-center space-x-2" action="/">
      <select
        className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        name="filter"
        id="filter"
        defaultValue={filter}
      >
        <option value="all">All Tasks</option>
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button className="rounded-lg border border-blue-200 p-2" type="submit">
        Filter
      </button>
    </Form>
  );
}
