import { BudgetProvider } from "./BudgetProvider";
import { BudgetType, TransactionType } from "@/lib/types";
import TempoaryName from "./TemporaryName";




export default async function Budgets({budgets, transactions} : {budgets: BudgetType[], transactions: TransactionType[]}) {   

    return(
        <BudgetProvider budgets={budgets} transactions={transactions}>
            <TempoaryName />
        </BudgetProvider>
    )
}