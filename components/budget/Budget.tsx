// import { LinearProgress } from "@mui/material";
import CategoryHeader from "../CategoryHeader";
import Card from "../Card";
import BudgetButtons from "./BudgetButtons";
import { BudgetType } from "@/lib/types";

interface BudgetProps {
    budgets: BudgetType[]
}


export default function Budget({budgets} : BudgetProps) {   

    return(
        <Card className="text-white">
            <CategoryHeader categoryName='Budget' />

            <div className="">
                <BudgetButtons />

                {budgets.length === 0 && (
                    <div className="w-full h-[100px] mt-4 grid place-content-center border-4 border-dashed border-[hsla(0,52%,100%,0.1)]">
                        <p className="text-gray-500">No budgets created</p>
                    </div>
                )}

                <div className="flex flex-col gap-4 mt-4 overflow-scroll max-h-[400px]">
                    {budgets.length > 0 && budgets.map((budget: BudgetType) => (
                        <BudgetItem key={budget.id}  budget={budget}/>
                    ))}
                </div>
                
            </div>

        </Card>
    )
}


function BudgetItem({ budget }: { budget: BudgetType }) {
    const {name, budget_amount, currently_transacted} = budget
    
    return(
        <div className="w-full bg-primary p-4 rounded-lg grow-0">
            <div className="flex justify-between items-center">
                <div className="text-[.9rem]">
                    <div>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
                </div>
                <div>{`£${currently_transacted} / £${budget_amount}`}</div>
            </div>
            {/* Progress bar ?? */}
        </div>
    )
}

// {budget_amount > 0 && (
//     <div className="progress mt-5">
//     <div className="flex justify-between items-center text-[.8rem] mb-1">
//         <span>Spent: £{(currently_transacted ?? 0).toLocaleString()}</span>
//         {/* <span>{(currently_transacted / budgetAmount) * 100}%</span> */}
//         <span>Remaining: £{(budget_amount - (currently_transacted ?? 0)).toLocaleString()}</span>
//     </div>
//         <LinearProgress variant="determinate" value={((currently_transacted ?? 0) / budget_amount) * 100} />
//     </div>
// )}