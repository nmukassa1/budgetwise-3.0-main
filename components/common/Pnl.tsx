import Difference from "./Difference";

interface PnlProps {
    actualIncome: number,
    budgetedIncome: number,
    actualExpense: number,
    budgetedExpense: number,
}

function Pnl({actualIncome, budgetedIncome, actualExpense, budgetedExpense} : PnlProps) {
    
    return ( 
        <ul className="mt-8">
            <li className="text-xl">
                Income: 
                <ActualAmount num={actualIncome} /> / 
                <BudgetedAmount num={budgetedIncome} />
                <Difference num={actualIncome - budgetedIncome} />
            </li>  
            <li className="text-xl">
                Expense: 
                <ActualAmount num={actualExpense} /> /
                <BudgetedAmount num={budgetedExpense} />
                <Difference num={actualExpense - budgetedExpense} />
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

