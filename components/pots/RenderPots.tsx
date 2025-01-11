"use client"
import PotItem from "./PotItem";
import { usePot } from "@/lib/context/PotContext";
import { PotType } from "@/lib/types";


export default function RenderPots() {

    const {pots} = usePot()

    return(
        <div className="">
            <div className="slider overflow-scroll grid grid-cols-2 gap-2 py-2">
                {pots.length === 0 && (
                    <div className="w-full h-full grid place-content-center border-4 border-dashed border-[hsla(0,52%,100%,0.1)]">
                        <p className="text-gray-500">No pots created</p>
                    </div>
                )}

                {pots.length > 0 && pots.map((pot: PotType) => (
                    <PotItem key={pot.id} pot={pot}  />
                ))}
            </div>
        </div>
    )
}

