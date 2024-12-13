import { Drawer } from "@mui/material";
import { Close } from "@mui/icons-material";
import DeleteConfirmation from "./DeleteConfirmation";
import EditForm from "./EditForm";

interface DrawerContainerProps {
  open: boolean;
  onClose: () => void;
  deleteOrEdit: "delete" | "edit" | "";
}

function DrawerContainer({ open, onClose, deleteOrEdit }: DrawerContainerProps) {
  return (
    <Drawer
      open={open}
      anchor="top"
      sx={{ "& .MuiDrawer-paper": { background: "#161618", borderRadius: "0 0 21px 21px" } }}
    >
      <div className="min-h-[30vh] mobile-container flex items-center justify-center gap-6 text-secondary relative">
        <button onClick={onClose} className="absolute top-4 right-0">
          <div className="pointer-events-none">
            <Close />
          </div>
        </button>

        {deleteOrEdit === "delete" && <DeleteConfirmation onClose={onClose} />}
        {deleteOrEdit === "edit" && <EditForm onClose={onClose} />}
      </div>
    </Drawer>
  );
}

export default DrawerContainer;
