import { useEffect, useState } from "react";
import { editPot } from "@/lib/mutations";
import { usePot } from "@/lib/context/PotContext";

interface FormData {
  name: string;
  amount: number | null;
}

interface EditFormProps {
  onClose: () => void;
}

function EditForm({ onClose }: EditFormProps) {
  const { pot: potItem } = usePot();

  const [editFormData, setEditFormData] = useState<FormData>({
    name: potItem?.name || "",
    amount: potItem?.target_amount ?? null,
  });
  const [validation, setValidation] = useState<string>("");

  useEffect(() => {
    setEditFormData({
      name: potItem?.name || "",
      amount: potItem?.target_amount ?? null,
    });
  }, [potItem]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!editFormData.name.trim()) {
      setValidation("Name cannot be empty.");
      return;
    }
    if (editFormData.amount === null || isNaN(editFormData.amount) || editFormData.amount < 0) {
      setValidation("Amount must be a positive number.");
      return;
    }

    const form = { name: editFormData.name, amount: editFormData.amount };
    await editPot(form, potItem.id);
    onClose();
  }

  function handleEditFormData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? (value ? Number(value) : null) : value,
    }));
    setValidation("");
  }

  return (
    <div className="py-6">
      <form className="text-center" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Edit Name</label>
          <input
            onChange={handleEditFormData}
            value={editFormData.name}
            name="name"
            type="text"
            placeholder="Pot Name"
            className="text-secondary p-4 border-white border-2 flex items-center gap-2 mt-4 rounded-md bg-transparent"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="amount">Edit Target Amount</label>
          <input
            onChange={handleEditFormData}
            value={editFormData.amount ?? ""}
            name="amount"
            type="number"
            placeholder="Amount"
            className="text-secondary p-4 border-white border-2 flex items-center gap-2 mt-4 rounded-md bg-transparent"
          />
        </div>
        {validation && <p className="text-red-500 mt-2">{validation}</p>}
        <button type="submit" className="bg-primary text-secondary p-4 rounded-md mt-6">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditForm;
