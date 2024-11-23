import { createContext, useContext, ReactNode } from "react";

// Define the type for transactions
type TransactionsContextType = {
    transaction_id: number;
    user_id: string;
    name: string;
    amount: number;
    category_type: string;
    is_recurring: boolean;
    transaction_date: string;
    created_at: string;
}[]; // Array of transaction objects

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