"use client";

import { useState } from "react";
import PotForm from "./PotForm";
import DrawerContainer from "@/components/DrawerContainer";
import { usePot } from "@/lib/context/PotContext";


function NewPot() {
    const {openNewPotFormDrawer, setOpenNewPotFormDrawer} = usePot();
    return (  
        <>
            <DrawerContainer openDrawer={openNewPotFormDrawer} setOpenDrawer={setOpenNewPotFormDrawer} position="bottom">
                <PotForm setOpenDrawer={setOpenNewPotFormDrawer} />
            </DrawerContainer>
        </>
    )
}

export default NewPot;