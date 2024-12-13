import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { PotType } from "../types";


export interface PotContextType {
    pot: PotType;
    setPot: (pot: PotType) => void;
}

const PotContext = createContext<PotContextType | undefined>(undefined);

// Context provider
export function PotProvider({ children, pot }: { children: ReactNode; pot: PotType }) {
    const defaultPot: PotType = {
        id: 0,
        user_id: "",
        name: "Default Pot",
        target_amount: 0,
        current_amount: 0,
        created_at: new Date().toISOString(),
        completed: false,
    };
    
    const initialPot = pot || defaultPot; // Fallback to defaultPot if pot is undefined

    // console.log("Initial pot:", initialPot); // Debugging log

    const [currentPot, setPot] = useState<PotType>(initialPot);

    useEffect(() => {
        if (pot) {
            setPot(pot);
        }
    }, [pot])

    return (
        <PotContext.Provider value={{ pot: currentPot, setPot }}>
            {children}
        </PotContext.Provider>
    );
}

// Custom hook to use the context
export function usePot() {
    const context = useContext(PotContext);
    if (context === undefined) {
        throw new Error("usePot must be used within a PotProvider");
    }
    return context;
}