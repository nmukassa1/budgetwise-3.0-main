import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { PotType } from "../types";


export interface PotContextProps {
    pots: PotType[];
    children?: ReactNode;
    setSelectedPotId?: (id: number | undefined) => void;
    filteredPot?: PotType;
    openDrawer?: boolean;
    setOpenDrawer?: (open: boolean) => void;
}

const PotContext = createContext<PotContextProps | undefined>(undefined);

// Context provider
export function PotProvider({ children, pots }: PotContextProps) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedPotId, setSelectedPotId] = useState<number | undefined>(undefined);

    const filteredPot = pots.filter((pot: PotType) => pot.id === selectedPotId)[0];

    return (
        <PotContext.Provider value={{ pots, children, setSelectedPotId, filteredPot, openDrawer, setOpenDrawer }}>
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