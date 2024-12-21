"use client"

import { useState } from "react";
import DrawerContainer from "../DrawerContainer";
import NewBudgetForm from "./NewBudgetForm";

function BudgetButtons() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedAction, setSelectedAction] = useState<null | 'newBudget' | 'newTransaction'>(null);

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    }
    
    return ( 
       <>
            <div className="mt-2 flex items-center gap-4">
                <button 
                    onClick={() => {
                    setSelectedAction('newBudget');
                    handleOpenDrawer();
                 }} className="h-[50px] w-full rounded-md bg-primary">New Budget</button>

                <button onClick={() => {
                    setSelectedAction('newTransaction');
                    handleOpenDrawer();
                    }} className="h-[50px] w-full rounded-md bg-primary">New Transaction</button>
            </div>
            <DrawerContainer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}>
                {selectedAction === 'newBudget' && <NewBudgetForm setOpenDrawer={setOpenDrawer} />}
                {selectedAction === 'newTransaction' && <p>New Transaction</p>}
            </DrawerContainer>
       </>
     );
}

export default BudgetButtons;