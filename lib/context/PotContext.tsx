import { createContext, useContext, ReactNode } from "react";


type PotContextType = {
    id: number;
    completed: boolean;
    name: string;
    target_amount: number;
    current_amount: number;
    created_at: string;
    user_id: number;
}

const PotContext = createContext<PotContextType | undefined>(undefined);

// Context provider
export function PotProvider({ children, pot }: { children: ReactNode; pot: PotContextType }) {
    return <PotContext.Provider value={pot}>{children}</PotContext.Provider>;
}

// Custom hook to use the context
export function usePot() {
    const context = useContext(PotContext);
    if (context === undefined) {
        throw new Error("usePot must be used within a PotProvider");
    }
    return context;
}