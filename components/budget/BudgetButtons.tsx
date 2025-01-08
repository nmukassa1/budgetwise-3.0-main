"use client"

import { useState } from "react";
import DrawerContainer from "../DrawerContainer";
import NewBudgetForm from "./NewBudgetForm";
import BudgetTransactionForm from "./BudgetTransactionForm";
import DrawerContainerScreen from "../DrawContainerScreen";

function BudgetButtons() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openDrawerScreen, setOpenDrawerScreen] = useState(false);
    // const [selectedAction, setSelectedAction] = useState<null | 'newBudget' | 'newTransaction'>(null);

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    }
    const handleOpenDrawerScreen = () => {
        setOpenDrawerScreen(true);
    }

    
    return ( 
       <>
            <div className="mt-2 flex items-center gap-4">
                <button 
                    onClick={() => {
                    // setSelectedAction('newBudget');
                    handleOpenDrawer();
                 }} className="h-[50px] w-full rounded-md bg-primary">New Budget</button>

                <button onClick={() => {
                    // setSelectedAction('newTransaction');
                    handleOpenDrawerScreen();
                    }} className="h-[50px] w-full rounded-md bg-primary">New Transaction</button>
            </div>
            <DrawerContainer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} position="bottom">
                <NewBudgetForm setOpenDrawer={setOpenDrawer} />
            </DrawerContainer>
            <DrawerContainerScreen openDrawer={openDrawerScreen} setOpenDrawer={setOpenDrawerScreen} position="bottom">
                <BudgetTransactionForm setOpenDrawer={setOpenDrawerScreen} />
            </DrawerContainerScreen>
       </>
     );
}

export default BudgetButtons;