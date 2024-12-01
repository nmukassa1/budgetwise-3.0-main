import { LinearProgress } from "@mui/material";
import CategoryHeader from "./CategoryHeader";
import Card from "./Card";

interface PotItemProps {
    name: string;
    progress: string;
}

export default function Budget(){
    return(
        <Card className="text-white">
            <CategoryHeader categoryName='Budget' />

            <div className="grid gap-4">
                <BudgetItem name='Rent' progress='100%' />
            </div>
        </Card>
    )
}


function BudgetItem({name, progress} : PotItemProps) {
    return(
        <div className="w-full bg-secondary text-black p-4 rounded-lg">
            <div className="text-[.9rem]">
                <div>{name}</div>
                <div>Budgeted: £1,400</div>
            </div>
            <div className="progress mt-5">
            <div className="flex justify-between items-center text-[.8rem] mb-1">
                <span>{progress}</span>
                <span>Remaining: £0</span>
            </div>
            <LinearProgress variant="determinate" value={100} />
            </div>
        </div>
    )
}

