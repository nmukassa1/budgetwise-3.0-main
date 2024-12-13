import { deletePot } from "@/lib/mutations";
import { usePot } from "@/lib/context/PotContext";

interface DeleteConfirmationProps {
  onClose: () => void;
}

function DeleteConfirmation({ onClose }: DeleteConfirmationProps) {
  const { pot: potItem } = usePot();

  async function handleDelete() {
    if (potItem?.id) {
      await deletePot(potItem.id);
      onClose();
    }
  }

  return (
    <button onClick={handleDelete} className="bg-red-500 p-4 rounded-md">
      Delete Pot
    </button>
  );
}

export default DeleteConfirmation;
