import EditTodoForm from "~/app/_components/EditTodoForm";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        <EditTodoForm todoId={id} />
      </div>
    </div>
  );
}
