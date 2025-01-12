import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { BudgetType, PotType, TransactionType } from "../types";


export interface InsightContextProps {
    budgets: BudgetType[];
    transactions: TransactionType[];
    children?: ReactNode;
    budgetSummary: string;
    totalActualExpense: number;
    totalActualIncome: number;
    totalBudgetedExpense: number;
    totalBudgetedIncome: number;
}


const InsightContext = createContext<InsightContextProps | undefined>(undefined);

// Context provider
export function InsightProvider({ children, budgets, transactions }: { children: ReactNode; budgets: BudgetType[]; transactions: TransactionType[] }) {
    const [budgetSummary, setBudgetSummary] = useState<string>('');
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const [totalBudgetedIncome, setTotalBudgetedIncome] = useState<number>(0);
    const [totalBudgetedExpense, setTotalBudgetedExpense] = useState<number>(0);
    const [totalActualIncome, setTotalActualIncome] = useState<number>(0);
    const [totalActualExpense, setTotalActualExpense] = useState<number>(0);

    function calculateBudgetSummary(budgets: BudgetType[], transactions: TransactionType[]){
        let budgetedIncome = budgets.filter(budget => budget.type === 'income');
        const totalBudgetedIncome = budgetedIncome.reduce((acc, budget) => acc + budget.budget_amount, 0);
    
        let budgetedExpense = budgets.filter(budget => budget.type === 'expense');
        const totalBudgetedExpense = budgetedExpense.reduce((acc, budget) => acc + budget.budget_amount, 0);
    
        let actualIncome = transactions.filter(transaction => transaction.category_type === 'income');
        const totalActualIncome = actualIncome.reduce((acc, transaction) => acc + transaction.amount, 0);
    
        let actualExpense = transactions.filter(transaction => transaction.category_type === 'expense');
        const totalActualExpense = actualExpense.reduce((acc, transaction) => acc + transaction.amount, 0);
    
        const budgetSummary = `${totalActualIncome - totalActualExpense} / ${totalBudgetedIncome - totalBudgetedExpense}`;

        setBudgetSummary(budgetSummary);
        setTotalActualExpense(totalActualExpense);
        setTotalActualIncome(totalActualIncome);
        setTotalBudgetedExpense(totalBudgetedExpense);
        setTotalBudgetedIncome(totalBudgetedIncome);
    }



    useEffect(() => {
        calculateBudgetSummary(budgets, transactions);
    }, [budgets, transactions]);

    return (
        <InsightContext.Provider value={{ budgets, transactions, children, budgetSummary, totalActualExpense, totalActualIncome, totalBudgetedExpense, totalBudgetedIncome }}>
            {children}
        </InsightContext.Provider>
    );
}

// Custom hook to use the context
export function useInsight() {
    const context = useContext(InsightContext);
    if (context === undefined) {
        throw new Error("useInsight must be used within a InsightProvider");
    }
    return context;
}