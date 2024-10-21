"use client"

import Analytics from "./components/Analytics";
import Pnl from "./components/Pnl";
import Pots from "./components/Pots";
import Transactions from "./components/Transactions";
import Card from "./components/Card";

export default function Overview(){
    
    return(
        <div className="overflow-scroll">
            <Pnl />
            <div className="masonry-grid grid grid-cols-2 mt-5 gap-4 h-full">
                <Pots />
                <Analytics />
                <Transactions />
            </div>
        </div>
    )
}


