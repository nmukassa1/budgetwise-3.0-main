import CategoryHeader from "@/components/CategoryHeader";
import { usePot } from "@/lib/context/PotContext";
import { PotType } from "@/lib/types";
import { LinearProgress } from "@mui/material";
import Card from "@/components/Card";

function Goals() {

    const { pot: potItem }: { pot: PotType } = usePot();


    const percentage = 
        (potItem.current_amount ?? 0) > potItem.target_amount
        ? 100
        : (potItem.current_amount === null ? 0 : Math.ceil((potItem.current_amount / potItem.target_amount) * 100) );

    const remaining =
        (potItem.current_amount ?? 0) > potItem.target_amount
            ? 0
            : potItem.target_amount - (potItem.current_amount ?? 0);

   

    return ( <Card className="w-full bg-primary p-4 rounded-md mt-8 text-white">
        <CategoryHeader categoryName={`Goal: £${(potItem.target_amount).toLocaleString()}`}  />

           
        <div className="progress mt-5">
            <div className="flex justify-between items-center text-[.8rem] mb-1">
                <span>{percentage}%</span>
                <span>Remaining: £{remaining}</span>
            </div>
            <LinearProgress variant="determinate" value={percentage} />
        </div>
    </Card> );
}

export default Goals;