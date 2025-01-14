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
      <button
        className="w-full text-left mx-auto"
        onClick={handleSelectPot}
      >
        <Card className="w-[200px] h-[200px] overflow-hidden rounded-2xl pointer-events-none p-3 flex flex-col justify-between" style={{ backgroundColor:  '#e4e2d5' }}>
            <div className="text-xl">{name}</div>
            <div className="mt-auto flex justify-between items-center w-full">
              <div className="text-4xl">£{current_amount ? current_amount?.toLocaleString() : 0}</div>
              {target_amount > 0 && (
                <div className="text-md w-fit rounded-full py-1 px-2 bg-secondary text-primary">
                  {Math.ceil(((current_amount ?? 0) / target_amount) * 100)}%
                </div>
              )}
            </div>
            
        </Card>
      </button>
  );
}

export default PotItem;
