import { deletePot } from "@/lib/mutations";
import { usePot } from "@/lib/context/PotContext";

interface DeleteConfirmationProps {
  setOpenDrawer: (open: boolean) => void;
}

function DeleteConfirmation({ setOpenDrawer }: DeleteConfirmationProps) {
  const { pot: potItem } = usePot();

  async function handleDelete() {
    if (potItem?.id) {
      await deletePot(potItem.id);
      setOpenDrawer(false);
    }
  }

  return (
    <button onClick={handleDelete} className="bg-red-500 p-4 rounded-md">
      Delete Pot
    </button>
  );
}

export default DeleteConfirmation;
