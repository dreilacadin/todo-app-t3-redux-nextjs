import AddTodoForm from "~/app/_components/AddTodoForm";

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        <AddTodoForm />
      </div>
    </div>
  );
}
