"use client"

import Card from "@/components/Card";
import CategoryHeader from "@/components/CategoryHeader";
import { getPots, getTransactionsById } from "@/lib/queries";
import PotSlider from "./PotSlider";
import TotalSaved from "./TotalSaved";
import { useState } from "react";


function Pots({ pots }) {

    // const pots = await getPots()
    const [isCompleted, setIsCompleted] = useState(false)

    return ( 
        <Card className="text-white">
            <CategoryHeader categoryName='Pots' />
            <TotalSaved pots={pots} isCompleted={isCompleted} setIsCompleted={setIsCompleted} />
            <PotSlider pots={pots} isCompleted={isCompleted} setIsCompleted={setIsCompleted} />
        </Card>
     );
}

export default Pots;




