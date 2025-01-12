import Insight from "./Insight";
import { getBudgets, getTransactions, getTransactionsMonthByType } from "@/lib/queries";
import { BudgetType, TransactionType } from "@/lib/types"; 

async function InsightServerComponent() {
    const [budgets, incomeTransactions, expenseTransactions] = await Promise.all([
        getBudgets(), 
        getTransactionsMonthByType('expense'),
        getTransactionsMonthByType('income')
    ]);

    const validBudgets: BudgetType[] = budgets ?? [];
    const validTransactions: TransactionType[] = [...(incomeTransactions ?? []), ...(expenseTransactions ?? [])];
    

    return ( 
       <Insight budgets={validBudgets} transactions={validTransactions} />
    );
}

export default InsightServerComponent;