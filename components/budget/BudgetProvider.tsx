"use client"
import { BudgetType, TransactionType } from "@/lib/types";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface BudgetProviderProps {
    children?: ReactNode;
    budgets: BudgetType[];
    openNewBudgetForm: boolean;
    setOpenNewBudgetForm: (open: boolean) => void;
    openNewTransactionForm: boolean;
    setOpenNewTransactionForm: (open: boolean) => void;
    openToolTip: boolean;
    setOpenToolTip: (open: boolean) => void;
    transactions: TransactionType[]; 
}
const budgetContext = createContext<BudgetProviderProps | undefined>(undefined);



const BudgetProvider = ({ children, budgets = [], transactions = [] }: {children: ReactNode, budgets: BudgetType[], transactions: TransactionType[]}) => {

    const [openToolTip, setOpenToolTip] = useState(false);
    const [openNewBudgetForm, setOpenNewBudgetForm] = useState(false);
    const [openNewTransactionForm, setOpenNewTransactionForm] = useState(false);

    return (
        <budgetContext.Provider 
            value={{ 
                budgets,
                openNewBudgetForm, setOpenNewBudgetForm,
                openNewTransactionForm, setOpenNewTransactionForm,
                openToolTip, setOpenToolTip,
                transactions
            }}>
            {children}
        </budgetContext.Provider>
    );
}

const useBudget = () => {
    const context = useContext(budgetContext);
    if (context === undefined) {
        throw new Error("useBudget must be used within a BudgetProvider");
    }
    return context;
}

export { BudgetProvider, useBudget };