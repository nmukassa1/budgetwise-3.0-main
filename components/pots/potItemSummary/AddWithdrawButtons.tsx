"use client"

import DrawerContainer from "@/components/DrawerContainer";
import { PotType } from "@/lib/types";
import { useState } from "react";
import AddWithdrawForm from "./AddWithdrawForm";

function AddWithdrawButtons({potItem}: { potItem: PotType }) {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedAction, setSelectedAction] = useState<null | 'add' | 'withdraw'>(null);

    function handleActiom(e: React.MouseEvent<HTMLButtonElement>) {
        const name = (e.target as HTMLButtonElement).id;
        setSelectedAction(name === 'add' ? 'add' : 'withdraw');
        setOpenDrawer(true);
    }

    return (  
        <>
            <div className="flex items-center gap-4 mt-2">
                {potItem?.current_amount != null && potItem.current_amount > 0 && <button onClick={handleActiom} id="withdraw">- Withdraw</button>}

                {(potItem?.current_amount === null || potItem?.current_amount < potItem?.target_amount || potItem?.target_amount === 0) && (
                <button onClick={handleActiom} id="add">+ Add money</button>
                )}
            </div> 

            <DrawerContainer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}>
                <AddWithdrawForm setOpenDrawer={setOpenDrawer} selectedAction={selectedAction} />
            </DrawerContainer>
        </>
    )}

export default AddWithdrawButtons;