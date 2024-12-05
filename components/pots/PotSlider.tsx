"use client"
import { useEffect, useRef, useState } from "react";
import NewPot from "./NewPot";
import PotItem from "./PotItem";
import PotItemSummary from "./PotItemSummary";
import { PotProvider } from "@/lib/context/PotContext";

export default function PotSlider({pots}){
    const [selectedPot, setSelectedPot] = useState<number | undefined>(undefined)
    const [togglePotSummary, setTogglePotSummary] = useState(false)

    const filteredPot = pots.filter(pot => pot.id === selectedPot)[0]
    
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        //Close the drawer if the selectedPot is not a number
        if(typeof selectedPot === "number"){
            setTogglePotSummary(true)
        }else{
            setTogglePotSummary(false)
            setSelectedPot(undefined)
        }
        
    }, [selectedPot]);

    return(
        <>
            <PotProvider pot={filteredPot}>
                <div className="flex gap-2 h-[130px]">
                <NewPot />
                    <div className="slider overflow-scroll flex items-center gap-2 py-2">
                        {pots.map((pot) => (
                            <PotItem key={pot.id} pot={pot} setSelectedPot={setSelectedPot} />
                        ))}
                    </div>
                </div>

                {filteredPot && <PotItemSummary togglePotSummary={togglePotSummary} setTogglePotSummary={setTogglePotSummary} />}
                
            </PotProvider>
        </>
    )
}

