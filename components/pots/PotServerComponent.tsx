import { getPots } from "@/lib/queries";
import Pots from "./Pots";
import { PotType } from "@/lib/types";



const PotServerComponent = async () => {
    const pots: PotType[] = await getPots() || [];
    return <Pots pots={pots} />;
};

export default PotServerComponent;