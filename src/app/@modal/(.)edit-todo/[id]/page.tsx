import EditTodoForm from "~/app/_components/EditTodoForm";
import Modal from "~/app/ui/dialog/Modal";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <Modal>
      <EditTodoForm todoId={id} />
    </Modal>
  );
}
