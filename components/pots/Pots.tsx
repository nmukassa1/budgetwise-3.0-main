"use client"

import Card from "@/components/Card";
import CategoryHeader from "@/components/CategoryHeader";
import { useState, Suspense, lazy } from "react";
import { PotType } from "@/lib/types";

const PotSlider = lazy(() => import("./PotSlider"));
const TotalSaved = lazy(() => import("./TotalSaved"));

interface PotsProps {
    pots: PotType[]
}

function Pots({ pots }: PotsProps) {

    const [isCompleted, setIsCompleted] = useState(false)

    return ( 
        <Card className="text-white">
            <CategoryHeader categoryName='Pots' />
            <Suspense fallback={<div>Loading...</div>}>
                <TotalSaved pots={pots} isCompleted={isCompleted} setIsCompleted={setIsCompleted} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <PotSlider pots={pots} isCompleted={isCompleted}  />
            </Suspense>
        </Card>
     );
}

export default Pots;