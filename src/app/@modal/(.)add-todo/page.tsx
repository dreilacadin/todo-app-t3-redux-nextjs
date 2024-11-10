import AddTodoForm from "~/app/_components/AddTodoForm";
import Modal from "~/app/ui/dialog/Modal";

export default function Page() {
  return (
    <Modal>
      <AddTodoForm />
    </Modal>
  );
}
