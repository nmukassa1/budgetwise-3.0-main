"use client"
import { useEffect, useRef, useState } from "react";
import NewPot from "./NewPot";
import PotItem from "./PotItem";
import { Drawer } from "@mui/material";

export default function PotSlider({pots}){
    const [selectedPot, setSelectedPot] = useState<number | undefined>(undefined)
    const [drawerOpen, setDrawerOpen] = useState(false)

    function handleDrawClose(){
        setDrawerOpen(false)
    }

    const filteredPot = pots.filter(pot => pot.id === selectedPot)[0]

    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        //Close the drawer if the selectedPot is not a number
        if(typeof selectedPot === "number"){
            setDrawerOpen(true)
        }else{
            setDrawerOpen(false)
        }
        
    }, [selectedPot]);

    return(
        <>
            <div className="flex gap-2 h-[130px]">
            <NewPot />
                <div className="slider overflow-scroll flex items-center gap-2 py-2">
                    {pots.map((pot) => (
                        <PotItem key={pot.id} pot={pot} setSelectedPot={setSelectedPot} />
                    ))}
                </div>
            </div>

            <Drawer open={drawerOpen} anchor="top">
                <div className="h-screen mobile-container relative">
                    <h1 className="absolute top-[30px] left-[50%] translate-x-[-50%] text-[5rem] font-black opacity-[.2] z-[-1]">{filteredPot?.name}</h1>
                    <button onClick={handleDrawClose} className="mt-4 bg-primary text-secondary py-4 px-6 rounded-md">Close</button>
                </div>
            </Drawer>
        </>
    )
}