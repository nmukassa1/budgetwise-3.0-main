'use client'
import PopOver from "../common/PopOver";
import DrawerContainerScreen from "../DrawContainerScreen";
import DrawerContainer from "../DrawerContainer";
import { useBudget } from "./BudgetProvider";
import BudgetTransactionForm from "./BudgetTransactionForm";
import NewBudgetForm from "./NewBudgetForm";

function FormSelection() {
    const {
        openNewBudgetForm, setOpenNewBudgetForm, 
        openNewTransactionForm, setOpenNewTransactionForm,
        openToolTip,
    } = useBudget();

    function openNewBudget(){
        setOpenNewBudgetForm(true);
    }
    function openNewTransaction(){
        setOpenNewTransactionForm(true);
    }

    return ( 
        <>
            {openToolTip && (
                <PopOver className="absolute bottom-[4.3rem] right-[16px] text-white text-lg flex flex-col">
                    <button className="bg-black block py-2 px-6 mb-4 self-end" onClick={openNewBudget}>New Budget</button>
                    <button className="bg-black block py-2 px-6 self-end" onClick={openNewTransaction}>New Transaction</button>
                </PopOver>
            )}

            <DrawerContainer openDrawer={openNewBudgetForm} setOpenDrawer={setOpenNewBudgetForm} position="bottom">
                <NewBudgetForm setOpenDrawer={setOpenNewBudgetForm} />
            </DrawerContainer>

            <DrawerContainerScreen openDrawer={openNewTransactionForm} setOpenDrawer={setOpenNewTransactionForm} position="bottom">
                <BudgetTransactionForm setOpenDrawer={setOpenNewTransactionForm} />
            </DrawerContainerScreen>
        </>
     );
}

export default FormSelection;