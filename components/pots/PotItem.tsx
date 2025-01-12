import { usePot } from "@/lib/context/PotContext";
import Card from "../Card";
import { PotType } from "@/lib/types";

interface PotItemProps {
  pot: PotType; // Use PotType from the shared types
}

function PotItem({ pot }: PotItemProps) {
  const { setSelectedPotId, setOpenDrawer } = usePot();
  const { name, target_amount, current_amount, id, bg_color } = pot;

  const handleSelectPot = () => {
    setSelectedPotId && setSelectedPotId(id);
    setOpenDrawer && setOpenDrawer(true)
  }
  

  return (
    <Card className="w-full h-[150px] overflow-hidden rounded-md flex flex-col items-center justify-center" style={{ backgroundColor: bg_color || 'gray' }}>
      <button
        className="flex flex-col w-[90%] h-[90%] text-left"
        onClick={handleSelectPot}
      >
        <div className="text-xl">{name}</div>
        <div className="mt-auto flex justify-between items-center w-full">
          <div className="text-4xl">£{current_amount ? current_amount?.toLocaleString() : 0}</div>
          {target_amount > 0 && (
            <div className="text-md w-fit rounded-full py-1 px-2 bg-secondary text-primary">
              {Math.ceil(((current_amount ?? 0) / target_amount) * 100)}%
            </div>
          )}
        </div>
        
      </button>
    </Card>
  );
}

export default PotItem;
