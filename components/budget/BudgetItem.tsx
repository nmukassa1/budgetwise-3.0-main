"use client"

import { BudgetType } from "@/lib/types";

interface BudgetItemProps {
    budget: BudgetType;
    setOpenDrawer: (open: boolean) => void;
    setSelectedBudget: (id: number) => void;
}

export default function BudgetItem({ budget, setOpenDrawer, setSelectedBudget }: BudgetItemProps) {
    const {name, budget_amount, currently_transacted, id} = budget


    const handleBudgetClick = () => {
        setSelectedBudget(id);
        setOpenDrawer(true);
    } 
    
    return(
        <button className="w-full bg-primary p-4 rounded-lg" onClick={handleBudgetClick}>
            <div className="">
                <div className="text-[.9rem]">
                    <div>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
                </div>
                <div>{`£${currently_transacted} / £${budget_amount}`}</div>
            </div>
            {/* Progress bar ?? */}
        </button>
    )
}