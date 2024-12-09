"use client"

import Card from "@/components/Card";
import CategoryHeader from "@/components/CategoryHeader";
import PotSlider from "./PotSlider";
import TotalSaved from "./TotalSaved";
import { useState } from "react";

interface Pot {
    id: number;
    name: string;
    target_amount: number;
    current_amount: number;
    completed: boolean;
}

interface PotsProps {
    pots: Pot[];
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




