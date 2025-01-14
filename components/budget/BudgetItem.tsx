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

    const handleBudgetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedBudget(id);
        setOpenDrawer(true);
    } 
    
    return(
        <button className="w-full text-left mx-auto" 
            onClick={handleBudgetClick}
        >
            <Card ref={itemRef} 
                className="w-[200px] h-[200px] overflow-hidden rounded-2xl pointer-events-none p-3 flex flex-col justify-between"
                style={{ backgroundColor: '#e4e2d5' }}
            >

               <div className="logo h-[20px] w-[20px] bg-black rounded-full"></div>

                    <div className="">
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
            </Card>
            </button>
    )
}