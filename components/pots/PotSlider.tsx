"use client"
import { useEffect, useRef, useState } from "react";
import NewPot from "./NewPot";
import PotItem from "./PotItem";
import { Drawer } from "@mui/material";
import Card from "../Card";
import CategoryHeader from "../CategoryHeader";

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
            setSelectedPot(undefined)
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

            <Drawer open={drawerOpen} anchor="top" sx={{'& .MuiDrawer-paper': {background: '#161618'}}}>
                <div className="h-screen mobile-container flex flex-col items-center text-white py-4">
                    <h1>{filteredPot?.name}</h1>

                        <div className="box w-[130px] h-[130px] overflow-hidden rounded-md bg-primary mt-6 mb-4">
                            {/* Placeholder box */}
                        </div>
                        <div className="current_amount w-fit">£{(filteredPot?.current_amount).toLocaleString()}</div>
                        <div className="flex items-center gap-4 mt-2">
                            <button>- Withdraw</button>
                            <button>+ Add money</button>
                        </div>

                        <Card className="w-full bg-primary p-4 rounded-md mt-8">
                            <CategoryHeader categoryName="Activity"  />

                            <div className="mt-4">
                                <ul className=" overflow-hidden max-h-[135.5px]">
                                    <li className="flex items-center justify-between py-4 border-b">
                                        <div className="icon h-[30px] w-[30px] bg-background rounded-full"></div>
                                        <div className="text">You added £100</div>
                                    </li>
                                    <li className="flex items-center justify-between py-4 border-b">
                                        <div className="icon h-[30px] w-[30px] bg-background rounded-full"></div>
                                        <div className="text">You added £100</div>
                                    </li>
                                </ul>
                                <button className="mt-4">See All</button>
                            </div>
                        </Card>
                    
                        
                    <button onClick={handleDrawClose} className="mt-4 bg-primary text-secondary py-4 px-6 rounded-md">Close</button>
               
                </div>
            </Drawer>
        </>
    )
}