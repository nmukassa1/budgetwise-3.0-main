"use client"
import { useEffect, useRef, useState } from "react";
import NewPot from "./NewPot";
import PotItem from "./PotItem";
import PotItemSummary from "./potItemSummary/PotItemSummary";
import { PotProvider } from "@/lib/context/PotContext";
import { PotType } from "@/lib/types";

interface PotSliderProps {
    pots: PotType[];
    isCompleted: boolean;
}

export default function PotSlider({pots, isCompleted} : PotSliderProps) {
    const [selectedPot, setSelectedPot] = useState<number | undefined>(undefined)
    const [togglePotSummary, setTogglePotSummary] = useState(false)

    const filteredPot = pots.filter((pot: PotType) => pot.id === selectedPot)[0]
    
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }


        //Close the drawer if the selectedPot is not a number
        if(typeof selectedPot === "number"){
            setTogglePotSummary(true)
        }
        
    }, [selectedPot]);

    return(
        <>
            <PotProvider pot={filteredPot}>
                <div className="flex gap-2 h-[130px]">
                <NewPot />
                    <div className="slider overflow-scroll flex items-center gap-2 py-2 flex-grow">
                        {pots.length === 0 && (
                            <div className="w-full h-full grid place-content-center border-4 border-dashed border-[hsla(0,52%,100%,0.1)]">
                                <p className="text-gray-500">No pots created</p>
                            </div>
                            )}

                        {pots.length > 0 && pots.filter((pot: PotType) => pot.completed === isCompleted).map((pot: PotType) => (
                            <PotItem key={pot.id} pot={pot} setSelectedPot={setSelectedPot} />
                        ))}
                    </div>
                </div>

                {filteredPot && <PotItemSummary togglePotSummary={togglePotSummary} setTogglePotSummary={setTogglePotSummary} />}
                
            </PotProvider>
        </>
    )
}

