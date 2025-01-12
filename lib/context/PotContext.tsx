import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { PotType } from "../types";


export interface PotContextProps {
    pots: PotType[];
    children?: ReactNode;
    setSelectedPotId?: (id: number | undefined) => void;
    filteredPot?: PotType;
    openDrawer: boolean;
    setOpenDrawer: (open: boolean) => void;
    openNewPotFormDrawer: boolean;
    setOpenNewPotFormDrawer: (open: boolean) => void;
}

const PotContext = createContext<PotContextProps | undefined>(undefined);

// Context provider
export function PotProvider({ children, pots }: { children: ReactNode; pots: PotType[] }) {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [openNewPotFormDrawer, setOpenNewPotFormDrawer] = useState<boolean>(false);
    const [selectedPotId, setSelectedPotId] = useState<number | undefined>(undefined);


    //Filter the pot based on the selected pot id for which the drawer is open
    const filteredPot = pots.filter((pot: PotType) => pot.id === selectedPotId)[0];

    return (
        <PotContext.Provider value={{ pots, setSelectedPotId, filteredPot, openDrawer, setOpenDrawer, openNewPotFormDrawer, setOpenNewPotFormDrawer }}>
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