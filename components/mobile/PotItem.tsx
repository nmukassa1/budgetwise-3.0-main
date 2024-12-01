import Card from "../Card";

//NOTE: Change type when I implement the actual data
interface PotItemProps {
    name: string;
    progress: string;
    daysLeft: string;
}

function PotItem({name} : PotItemProps) {
    return ( 
        <Card className="shrink-0 w-[130px] h-[130px] rounded-md bg-secondary text-black flex flex-col items-center justify-center">
            <div className="flex flex-col w-[90%] h-[90%]">
                <div>{name}</div>
                <div>£400</div>
                <div className="text-sm w-fit rounded-full py-1 px-2 bg-red-500 mt-auto">40%</div>
            </div>
        </Card>
     );
}

export default PotItem;