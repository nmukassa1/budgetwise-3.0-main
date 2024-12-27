import { usePot } from "@/lib/context/PotContext";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
// import DrawerContainer from "./DrawerContainer";
import DrawerContainer from "@/components/DrawerContainer";
import DeleteConfirmation from "./DeleteConfirmation";
import EditForm from "./EditForm";

function Header() {
  const { pot: potItem } = usePot();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [deleteOrEdit, setDeleteOrEdit] = useState<"delete" | "edit" | "">("");

  function handleOpenSlide(e: React.MouseEvent<HTMLButtonElement>) {
    setOpenDrawer(!openDrawer);
    setDeleteOrEdit((e.target as HTMLButtonElement).id as "delete" | "edit")
}


  return (
    <div className="relative w-full text-center" id="pot-item-header">
      <h1>{potItem?.name}</h1>
      <div className="absolute right-0 top-0">
        <button id="delete" className="block mb-4" onClick={handleOpenSlide}>
          <div className="pointer-events-none">
            <Delete />
          </div>
        </button>
        <button id="edit" onClick={handleOpenSlide}>
          <div className="pointer-events-none">
            <Edit />
          </div>
        </button>
      </div>

      <DrawerContainer  openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} position="top">
        {deleteOrEdit === "delete" && <DeleteConfirmation setOpenDrawer={setOpenDrawer} />}
        {deleteOrEdit === "edit" && <EditForm setOpenDrawer={setOpenDrawer} potItem={potItem} />}
      </DrawerContainer>
    </div>
  );
}

export default Header;
