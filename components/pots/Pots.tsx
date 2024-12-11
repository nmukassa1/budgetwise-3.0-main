"use client"

import Card from "@/components/Card";
import CategoryHeader from "@/components/CategoryHeader";
import PotSlider from "./PotSlider";
import TotalSaved from "./TotalSaved";
import { useState } from "react";
import { PotType } from "@/lib/types";

interface PotsProps {
    pots: PotType[]
}

function Pots({ pots }: PotsProps) {

    const [isCompleted, setIsCompleted] = useState(false)

    return ( 
        <Card className="text-white">
            <CategoryHeader categoryName='Pots' />
            <TotalSaved pots={pots} isCompleted={isCompleted} setIsCompleted={setIsCompleted} />
            <PotSlider pots={pots} isCompleted={isCompleted}  />
        </Card>
     );
}

export default Pots;




