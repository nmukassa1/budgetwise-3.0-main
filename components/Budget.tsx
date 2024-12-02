import { LinearProgress } from "@mui/material";
import CategoryHeader from "./CategoryHeader";
import Card from "./Card";

interface PotItemProps {
    name: string;
    budgetAmount: number;
    amountSpent: number;
}

export default function Budget(){
    return(
        <Card className="text-white">
            <CategoryHeader categoryName='Budget' />

            <div className="grid gap-4 mt-4">
                <BudgetItem name='Rent' budgetAmount={1400} amountSpent={1400} />
                <BudgetItem name='Food' budgetAmount={250} amountSpent={75} />
            </div>
        </Card>
    )
}


function BudgetItem({name, budgetAmount, amountSpent} : PotItemProps) {
    return(
        <div className="w-full bg-primary p-4 rounded-lg">
            <div className="text-[.9rem]">
                <div>{name}</div>
                <div>Budgeted: £{budgetAmount.toLocaleString()}</div>
            </div>
            <div className="progress mt-5">
            <div className="flex justify-between items-center text-[.8rem] mb-1">
                <span>{(amountSpent / budgetAmount) * 100}%</span>
                <span>Remaining: £{(budgetAmount - amountSpent).toLocaleString()}</span>
            </div>
            <LinearProgress variant="determinate" value={(amountSpent / budgetAmount) * 100} />
            </div>
        </div>
    )
}

