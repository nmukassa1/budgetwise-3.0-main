import { getPots } from "@/lib/queries";
import Pots from "./Pots";



const PotServerComponent = async () => {
    const pots = await getPots() || [];
    return <Pots pots={pots} />;
};

export default PotServerComponent;