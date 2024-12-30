import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import DrawerContainer from "./DrawerContainer";
// import EditForm from "./pots/potItemSummary/EditForm";
import DeleteItemComponent from "./DeleteItemComponent";
import EditItem from "./EditItem";
import { editBudget } from "@/lib/mutations";

interface EditDeleteItemProps {
    item: {id: number, name: string, target_amount?: number, budget_amount?: number};
    tableName: string;
    closeParentDrawer: (open: boolean) => void;
}

export default function EditDeleteItem({item, tableName, closeParentDrawer} : EditDeleteItemProps) {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [deleteOrEdit, setDeleteOrEdit] = useState<"delete" | "edit" | "">("");

    function handleOpenSlide(e: React.MouseEvent<HTMLButtonElement>) {
        setOpenDrawer(!openDrawer);
        setDeleteOrEdit((e.target as HTMLButtonElement).id as "delete" | "edit")
    }

    return(
        <>
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
                {deleteOrEdit === "delete" && <DeleteItemComponent setOpenDrawer={setOpenDrawer} itemId={item.id} tableName={tableName} closeParentDrawer={closeParentDrawer} />}

                {deleteOrEdit === "edit" && 
                    <EditItem setOpenDrawer={setOpenDrawer} item={item} tableName={tableName} formAction={editBudget} />
                }
            </DrawerContainer>
        </>
    )
}