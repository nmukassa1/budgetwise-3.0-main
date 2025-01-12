"use client"
import Difference from "./Difference";
import { useInsight } from "@/lib/context/InsightContext";

interface PnlProps {
    actualIncome: number,
    budgetedIncome: number,
    actualExpense: number,
    budgetedExpense: number,
}

function Pnl() {
    const {totalActualExpense, totalActualIncome, totalBudgetedExpense, totalBudgetedIncome} = useInsight();

    return ( 
        <ul className="mt-8">
            <li className="text-xl">
                Income: 
                <ActualAmount num={totalActualIncome} /> / 
                <BudgetedAmount num={totalBudgetedIncome} />
                <Difference num={totalActualIncome - totalBudgetedIncome} />
            </li>  
            <li className="text-xl">
                Expense: 
                <ActualAmount num={totalActualExpense} /> /
                <BudgetedAmount num={totalBudgetedExpense} />
                <Difference num={totalActualExpense - totalBudgetedExpense} />
            </li>  
        </ul>
     );
}

export default Pnl;

interface ActualAmountProps {
    num: number;
}
function ActualAmount({num} : ActualAmountProps) {
    return(
        <> 
            <span className="font-bold"> £{num.toLocaleString()}</span>
        </>
    )
}
interface BudgetedProps {
    num: number;
}
function BudgetedAmount({num} : BudgetedProps) {
    return(
        <> 
            <span className="text-sm"> £{num.toLocaleString()}</span>
        </>   
    )
}

