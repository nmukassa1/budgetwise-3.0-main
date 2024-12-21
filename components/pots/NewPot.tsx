"use client";

import { useState } from "react";
import PotForm from "./PotForm";
import DrawerContainer from "@/components/DrawerContainer";


function NewPot() {
    const [openDrawer, setOpenDrawer] = useState(false);
    function handleOpenSlide() {
        setOpenDrawer(!openDrawer);
    }
    return (  
        <>
            <div className="py-2">
                <button onClick={handleOpenSlide} className="bg-primary text-secondary px-4 py-2 h-full rounded-full">+</button>
            </div>
            <DrawerContainer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}>
                <PotForm setOpenDrawer={setOpenDrawer} />
            </DrawerContainer>
        </>
    )
}

export default NewPot;