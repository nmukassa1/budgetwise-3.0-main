"use client";

import { Drawer } from "@mui/material";
import { useState } from "react";
import PotForm from "./PotForm";


function NewPot() {
    const [openSlide, setOpenSlide] = useState(false);
    function handleOpenSlide() {
        setOpenSlide(!openSlide);
    }
    return (  
        <>
            <div className="py-2">
                <button onClick={handleOpenSlide} className="bg-primary text-secondary px-4 py-2 h-full rounded-full">+</button>
            </div>
            <Drawer open={openSlide} anchor="top">
                <div className="h-screen flex flex-col items-center justify-center mobile-container relative">
                    <h1 className="absolute top-[30px] left-[50%] translate-x-[-50%] text-[5rem] font-black opacity-[.2]">POTS</h1>
                    <PotForm  setOpenSlide={setOpenSlide}/>
                    <button onClick={() => setOpenSlide(false)} className="mt-4 bg-primary text-secondary py-4 px-6 rounded-md">Close</button>
                </div>
            </Drawer>
        </>
    )
}

export default NewPot;