"use client"
import { PotType } from "@/lib/types";
import { PotProvider } from "@/lib/context/PotContext";
import TemporaryName from "./potItemSummary/TemporaryName";


interface PotsProps {
    pots: PotType[]
}

function Pots({ pots }: PotsProps) {

   

    return ( 
        <PotProvider pots={pots}>
          <TemporaryName />
        </PotProvider>
     );
}

export default Pots;