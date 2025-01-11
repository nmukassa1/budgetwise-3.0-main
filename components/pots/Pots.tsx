"use client"
import { PotType } from "@/lib/types";
import Header from "../common/Header";
import CircleDesign from "../common/CircleDesign";
import SectionLayout from "../common/SectionLayout";
import SectionSummary from "../common/SectionSummary";
import { PotProvider } from "@/lib/context/PotContext";
import RenderPots from "./RenderPots";
import PotItemSummary from "./potItemSummary/PotItemSummary";


interface PotsProps {
    pots: PotType[]
}

function Pots({ pots }: PotsProps) {

    const totalSaved = pots.reduce((acc, pot) => acc + (pot.current_amount ?? 0), 0).toLocaleString()

    return ( 
        <PotProvider pots={pots}>
            <SectionLayout>
                <Header>Pots</Header>
                <CircleDesign bgColor="bg-blue-500" />
                <RenderPots /> 
                <SectionSummary title={`Total saved: £${totalSaved}`} />
                {/* <PotItemSummary /> */}
            </SectionLayout>
        </PotProvider>
     );
}

export default Pots;