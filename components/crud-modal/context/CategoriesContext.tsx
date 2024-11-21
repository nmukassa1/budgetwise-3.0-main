import { createContext, useContext, ReactNode } from "react";

// Define the type for categories
type CategoriesContextType = {
    id: number;
    user_id: string;
    name: string;
    category_type: string;
    budget_amount: number;
    currently_transacted: number;
    created_at: string;
}[]; // Array of category objects

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

// Context provider
export function CategoriesProvider({ children, categories }: { children: ReactNode; categories: CategoriesContextType }) {
    return <CategoriesContext.Provider value={categories}>{children}</CategoriesContext.Provider>;
}

// Custom hook to use the context
export function useCategories() {
    const context = useContext(CategoriesContext);
    if (context === undefined) {
        throw new Error("useCategories must be used within a CategoriesProvider");
    }
    return context;
}