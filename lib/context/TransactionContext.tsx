import { createContext, useContext, ReactNode } from "react";
import { TransactionType } from "../types";

// Define the type for transactions
type TransactionsContextType = {
    transactions: TransactionType[];
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(undefined);

// Context provider
export function TransactionsProvider({ children, transactions }: { children: ReactNode; transactions: TransactionsContextType }) {
    return <TransactionsContext.Provider value={transactions}>{children}</TransactionsContext.Provider>;
}

// Custom hook to use the context
export function useTransactions() {
    const context = useContext(TransactionsContext);
    if (context === undefined) {
        throw new Error("useTransactions must be used within a TransactionsProvider");
    }
    return context;
}