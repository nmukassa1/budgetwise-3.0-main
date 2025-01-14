"use client"
import RenderBudgetItems from "./RenderBudgetItems";
import SectionLayout from "../common/SectionLayout";
import Header from "../common/Header";
import SectionSummary from "../common/SectionSummary";
import FormSelection from "./FormSelection";
import { useBudget } from "./BudgetProvider";
import { useEffect, useState } from "react";
import { getBudgets, getTransactionsByType } from "@/lib/queries";
import AllExpenseTransactions from "../common/AllExpenseTransactions";

function TempoaryName() {
    const {budgets, setOpenToolTip} = useBudget();
    const [totalExpense, setTotalExpense] = useState<number>(0);
    const [totalBudgetExpense, setTotalBudgetExpense] = useState<number>(0);

    useEffect(() => {
        async function fetchTotalExpense(){
            const budgets = await getBudgets();
            const transactions = await getTransactionsByType('expense');

            const actualTotal = transactions ? transactions.reduce((acc: number, curr: { amount: number }) => acc + curr.amount, 0) : 0;
            const filteredTransactionType = budgets ? budgets.filter(budget => budget.type === 'expense') : [];
            console.log('filteredTransactionType', filteredTransactionType);
            

            const expenseTransactions = filteredTransactionType.reduce((acc, curr) => acc + curr.budget_amount, 0);
            console.log('expenseTransactions', expenseTransactions);
            
            // const total = expenseTransactions ? expenseTransactions.reduce((acc: number, curr: { amount: number }) => acc + curr.amount, 0) : 0;    
            
            setTotalExpense(actualTotal);
            setTotalBudgetExpense(expenseTransactions);
        }

        fetchTotalExpense()

    }, [budgets])
    return ( 
        <SectionLayout>
                <Header>Expenses</Header>

                {budgets.length === 0 ?(
                    <div className="w-full h-[100px] mt-4 grid place-content-center border-4 border-dashed border-[hsla(0,52%,100%,0.1)]">
                        <p className="text-gray-500">No budgets created</p>
                    </div>
                ) : <RenderBudgetItems />}

                <AllExpenseTransactions />

                <FormSelection />
                <SectionSummary title={`Total expense: ${totalExpense} / ${totalBudgetExpense}`} openSpecificDraw={setOpenToolTip} />

        </SectionLayout>
     );
}

export default TempoaryName;