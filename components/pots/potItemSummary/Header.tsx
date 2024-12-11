import { usePot } from "@/lib/context/PotContext";
import { deletePot, editPot } from "@/lib/mutations";
import { PotType } from "@/lib/types";
import { currencyFormat } from "@/lib/utils";
import { Close, Delete, Edit } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";

interface FormData {
  name: string;
  amount: number;
}

function Header() {
  const {pot: potItem}: { pot: PotType } = usePot();

  const [deleteOrEdit, setDeleteOrEdit] = useState<string>("");
  const [openEditOrDeleteModel, setOpenEditOrDeleteModel] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<FormData>({
    name: potItem?.name || "",
    amount: potItem?.target_amount || 0,
  });

  const [validation, setValidation] = useState<string>("");

  useEffect(() => {
    setEditFormData({
      name: potItem?.name || "",
      amount: potItem?.target_amount || 0,
    });
  }, [potItem.id]);

  function handleDeleteOrEditModel(e: React.MouseEvent<HTMLButtonElement>) {
    setDeleteOrEdit((e.target as HTMLButtonElement).id);
    setOpenEditOrDeleteModel(true);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>, formData: FormData, id: number) {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setValidation("Name cannot be empty.");
      return;
    }
    if (isNaN(formData.amount) || formData.amount <= 0) {
      setValidation("Amount must be a positive number.");
      return;
    }

    const form = { name: formData.name, amount: formData.amount }

    // Update pot
    await editPot(form, id);
    setOpenEditOrDeleteModel(false);
  }

  function handleEditFormData(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
    setValidation(""); // Clear validation messages on input change
  }

  return (
    <div className="relative w-full text-center" id="pot-item-header">
      <h1>{potItem?.name}</h1>
      <div className="absolute right-0 top-0">
        <button id="delete" className="block mb-4" onClick={handleDeleteOrEditModel}>
          <div className="pointer-events-none">
            <Delete />
          </div>
        </button>
        <button id="edit" onClick={handleDeleteOrEditModel}>
          <div className="pointer-events-none">
            <Edit />
          </div>
        </button>
      </div>

      {/* Drawer for Delete or Edit */}
      <Drawer
        open={openEditOrDeleteModel}
        anchor="top"
        sx={{ "& .MuiDrawer-paper": { background: "#161618", borderRadius: "0 0 21px 21px" } }}
      >
        <div className="min-h-[30vh] mobile-container flex items-center justify-center gap-6 text-secondary relative">
          <button
            onClick={() => setOpenEditOrDeleteModel(false)}
            className="absolute top-4 right-0"
          >
            <div className="pointer-events-none">
              <Close />
            </div>
          </button>

          {/* Delete Confirmation */}
          {deleteOrEdit === "delete" && (
            <button
              onClick={async () => {
                await deletePot(potItem.id);
                setOpenEditOrDeleteModel(false);
              }}
              className="bg-red-500 p-4 rounded-md"
            >
              Delete Pot
            </button>
          )}

          {/* Edit Form */}
          {deleteOrEdit === "edit" && (
            <div className="py-6">
              <form
                className="text-center"
                onSubmit={async (e) => {
                  await handleSubmit(e, editFormData, potItem.id);
                }}
              >
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
                    value={editFormData.amount}
                    name="amount"
                    type="number"
                    placeholder="Amount"
                    className="text-secondary p-4 border-white border-2 flex items-center gap-2 mt-4 rounded-md bg-transparent"
                  />
                </div>
                {validation && <p className="text-red-500 mt-2">{validation}</p>}
                <button
                  type="submit"
                  className="bg-primary text-secondary p-4 rounded-md mt-6"
                >
                  Save
                </button>
              </form>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
