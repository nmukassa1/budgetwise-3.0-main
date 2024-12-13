import { usePot } from "@/lib/context/PotContext";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import DrawerContainer from "./DrawerContainer";

function Header() {
  const { pot: potItem } = usePot();

  const [deleteOrEdit, setDeleteOrEdit] = useState<"delete" | "edit" | "">("");
  const [openEditOrDeleteModel, setOpenEditOrDeleteModel] = useState<boolean>(false);

  function handleDeleteOrEditModel(e: React.MouseEvent<HTMLButtonElement>) {
    setDeleteOrEdit((e.target as HTMLButtonElement).id as "delete" | "edit");
    setOpenEditOrDeleteModel(true);
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

      <DrawerContainer
        open={openEditOrDeleteModel}
        onClose={() => setOpenEditOrDeleteModel(false)}
        deleteOrEdit={deleteOrEdit}
      />
    </div>
  );
}

export default Header;
