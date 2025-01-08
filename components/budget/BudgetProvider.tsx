"use client"
import { BudgetType } from "@/lib/types";
import { createContext, useContext } from "react";
import { ReactNode } from "react";

const budgetContext = createContext([] as BudgetType[]);


interface BudgetProviderProps {
    children: ReactNode;
    budgets: BudgetType[];
}

const BudgetProvider = ({ children, budgets = [] }: BudgetProviderProps) => {
    return (
        <budgetContext.Provider value={budgets}>{children}</budgetContext.Provider>
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