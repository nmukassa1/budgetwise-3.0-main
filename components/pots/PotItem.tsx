import Card from "../Card";

//NOTE: Change type when I implement the actual data
interface PotItemProps {
    pot: {
        name: string;
        target_amount: number;
        current_amount: number;
        id: number;
    };
    setSelectedPot: (id: number) => void;
}

function PotItem({pot, setSelectedPot} : PotItemProps) {
    const { name, target_amount, current_amount, id } = pot;

    return ( 
        <Card className="shrink-0 w-[130px] h-full overflow-hidden rounded-md bg-primary flex flex-col items-center justify-center">
            <button className="flex flex-col w-[90%] h-[90%] text-left" onClick={() => setSelectedPot(id)}>
                <div>{name}</div>
                <div className="mt-auto">£{(target_amount).toLocaleString()}</div>
                <div className="text-sm w-fit rounded-full mt-2 py-1 px-2 bg-secondary text-primary">{(current_amount / target_amount) * 100}%</div>
            </button>
        </Card>
     );
}

export default PotItem;