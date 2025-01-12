"use client"

import { BudgetType } from "@/lib/types";
import Card from "@/components/Card";
import { useRef } from "react";
import { useBudget } from "./BudgetProvider";

interface BudgetItemProps {
    budget: BudgetType;
    setOpenDrawer: (open: boolean) => void;
    setSelectedBudget: (id: number) => void;
}

export default function BudgetItem({ budget, setOpenDrawer, setSelectedBudget }: BudgetItemProps) {
    const {name, budget_amount, id, bg_color} = budget
    const {transactions} = useBudget();
    function total(){
        return transactions.reduce((acc, curr) => {
            if(curr.budget_id === id){
                return acc + curr.amount;
            }
            return acc;
        }, 0);
    }

  
    

    const itemRef = useRef<HTMLDivElement>(null);

    const handleBudgetClick = () => {
        setSelectedBudget(id);
        setOpenDrawer(true);
        // console.log(itemRef);

    } 
    
    return(
        <Card ref={itemRef} className={`w-full h-[150px] overflow-hidden rounded-t-2xl flex flex-col items-center justify-center overlap-cards`} style={{ backgroundColor: bg_color || 'gray' }}>
            <button className="w-[90%] h-[90%] text-left" 
                onClick={handleBudgetClick}
            >
                <div className="flex justify-between">
                    <div className="text-xl">
                        <div>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
                    </div>
                    <div className="text-2xl">
                        <p>
                            {`£${total()}`}
                            {budget_amount > 0 && (
                                ' / ' + budget_amount
                            )}
                        </p>
                    </div>
                </div>

                <div className="bg-red-500 h-[200px] mt-6">

                </div>
            </button>
        </Card>
    )
}