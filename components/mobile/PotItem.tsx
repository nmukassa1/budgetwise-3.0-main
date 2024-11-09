import { LinearProgress } from "@mui/material";
import Card from "../Card";

//NOTE: Change type when I implement the actual data
interface PotItemProps {
    name: string;
    progress: string;
    daysLeft: string;
}

function PotItem({name, progress, daysLeft} : PotItemProps) {
    return ( 
        <Card className="shrink-0 w-2/3 bg-secondary">
            <div>{name}</div>
            <div className="progress mt-5">
            <LinearProgress variant="determinate" value={50} />
            <div className="flex justify-between items-center text-[.8rem] mt-1">
                <span>{progress}</span>
                <span>{daysLeft} days left</span>
            </div>
            </div>
        </Card>
     );
}

export default PotItem;