import DrawerContainerScreen from "../DrawContainerScreen";
import { BudgetType } from "@/lib/types";
import EditDeleteItem from "../EditDeleteItem";
import Transactions from "../Transactions";
import TransactionWithoutBudgetForm from "./TransactionWithoutBudgetForm";

interface BudgetItemSummaryProps {
    filteredBudget: BudgetType,
    openDrawer: boolean,
    setOpenDrawer: (open: boolean) => void
}

export default function BudgetItemSummary({filteredBudget, setOpenDrawer, openDrawer} : BudgetItemSummaryProps) {

    // const {name, budget_amount, currently_transacted} = filteredBudget;

    
    

    return(
        <DrawerContainerScreen openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} position="top">
            {filteredBudget && (
                <div className="relative w-full text-center mt-4">
                    <h1>{filteredBudget.name}</h1>
                    <EditDeleteItem item={filteredBudget} tableName="budget" closeParentDrawer={setOpenDrawer}/>
                    <div>
                        £{filteredBudget.currently_transacted} / £{filteredBudget.budget_amount}
                    </div>

                    <TransactionWithoutBudgetForm id={filteredBudget.id} />

                    <Transactions id={filteredBudget.id} match="budget_id" />

                </div>


            )}
        </DrawerContainerScreen>
    )
}