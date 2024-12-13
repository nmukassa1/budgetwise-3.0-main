import Card from "../Card";
import { PotType } from "@/lib/types";

interface PotItemProps {
  pot: PotType; // Use PotType from the shared types
  setSelectedPot: (id: number) => void; // Function to handle selection
}

function PotItem({ pot, setSelectedPot }: PotItemProps) {
  const { name, target_amount, current_amount, id } = pot;
  

  return (
    <Card className="shrink-0 w-[130px] h-full overflow-hidden rounded-md bg-primary flex flex-col items-center justify-center">
      <button
        className="flex flex-col w-[90%] h-[90%] text-left"
        onClick={() => setSelectedPot(id)}
      >
        <div>{name}</div>
        <div className="mt-auto">£{current_amount ? current_amount?.toLocaleString() : 0}</div>
        {target_amount > 0 && (
          <div className="text-sm w-fit rounded-full mt-2 py-1 px-2 bg-secondary text-primary">
            {Math.ceil(((current_amount ?? 0) / target_amount) * 100)}%
          </div>
        )}
      </button>
    </Card>
  );
}

export default PotItem;
