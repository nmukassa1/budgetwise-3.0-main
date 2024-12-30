"use client"
import { BudgetType } from "@/lib/types";
import BudgetItem from "./BudgetItem";
import DrawerContainerScreen from "../DrawContainerScreen";
import { useEffect, useState } from "react";
import { getTransactionsById } from "@/lib/queries";
import EditDeleteItem from "../EditDeleteItem";

export default function RenderBudgetItems({budgets} : {budgets: BudgetType[]}) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
    // const [transactions, setTransactions] = useState([]);

    const filteredBudget = budgets.filter((budget: BudgetType) => budget.id === selectedBudget)[0]

    useEffect(() => {
        async function fetchTransactions() {
            try {
                const results = await getTransactionsById(filteredBudget.id, "budget_id");
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

            <DrawerContainerScreen openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} position="top">
                {filteredBudget && (
                    <div className="relative w-full text-center">
                        <h1>{filteredBudget.name}</h1>
                        <EditDeleteItem item={filteredBudget} tableName="budget" closeParentDrawer={setOpenDrawer}/>

                    </div>

                )}
            </DrawerContainerScreen>
        </div>
    )
}