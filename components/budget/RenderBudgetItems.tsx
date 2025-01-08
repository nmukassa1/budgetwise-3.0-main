"use client"
import { BudgetType } from "@/lib/types";
import BudgetItem from "./BudgetItem";
import { useEffect, useState } from "react";
import { getCurrentMonthTransactionsById } from "@/lib/queries";
import BudgetItemSummary from "./BudgetItemSummary";
import { useBudget } from "./BudgetProvider";

export default function RenderBudgetItems() {

    const budgets = useBudget();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
    // const [transactions, setTransactions] = useState([]);

    const filteredBudget = budgets.filter((budget: BudgetType) => budget.id === selectedBudget)[0]

    useEffect(() => {
        async function fetchTransactions() {
            try {
                const results = await getCurrentMonthTransactionsById(filteredBudget.id, "budget_id");
                console.log(filteredBudget);
                console.log(results);
                
                // setTransactions(results);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        }
      
        if(selectedBudget){
            fetchTransactions()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedBudget])


    return(
        <div className="grid grid-cols-2 gap-4 mt-4 overflow-scroll max-h-[400px]">
            {budgets.length > 0 && budgets.map((budget: BudgetType) => (
                <BudgetItem key={budget.id}  budget={budget} setOpenDrawer={setOpenDrawer} setSelectedBudget={setSelectedBudget}/>
            ))}

            <BudgetItemSummary filteredBudget={filteredBudget} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
    )
}