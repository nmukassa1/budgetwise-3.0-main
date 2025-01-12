import { getBudgets, getTransactionsMonthByType } from "@/lib/queries";
import Budgets from "./Budgets";

async function BudgetsServerComponent() {
    const budgets = await getBudgets() || [];
    const currentMonthTransactions = await getTransactionsMonthByType('expense') || [];

    return <Budgets budgets={budgets} transactions={currentMonthTransactions} />
}

export default BudgetsServerComponent;