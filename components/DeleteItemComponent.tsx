import { deleteItem } from "@/lib/mutations";

interface DeleteConfirmationProps {
  setOpenDrawer: (open: boolean) => void;
  itemId: number;
  tableName: string;
  closeParentDrawer: (open: boolean) => void;
}

function DeleteConfirmation({ setOpenDrawer, itemId, tableName, closeParentDrawer }: DeleteConfirmationProps) {

  async function handleDelete() {
    if (itemId) {
      const results = await deleteItem(itemId, tableName);
      console.log(results);
      setOpenDrawer(false);
      closeParentDrawer(false);
    }
  }

  return (
    <div className="grid place-content-center h-[240px]">
      <button onClick={handleDelete} className="bg-red-500 p-4 rounded-md">
        Delete {tableName}
      </button>
    </div>
  );
}

export default DeleteConfirmation;
