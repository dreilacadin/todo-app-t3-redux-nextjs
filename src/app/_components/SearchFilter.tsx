import Form from "next/form";

/** A search bar than onEnter, will push the search query as SearchParams */
export default function SearchFilter() {
  return (
    <Form action="/">
      <input
        type="text"
        name="query"
        className="rounded-lg border border-gray-500 p-2 text-gray-500"
        placeholder="Search todos.."
      />
    </Form>
  );
}
