"use client"

import Analytics from "@components/Analytics";
import Pnl from "@components/Pnl";
import Pots from "@components/Pots";
import Transactions from "@components/Transactions";

export default function Overview(){
    
    return(
        <div className="">
            <Pnl />
            <div className="masonry-layout">
                <Pots />
                <Analytics />
                <Transactions />
            </div>
        </div>
    )
}


