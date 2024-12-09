import { getPots } from "@/lib/queries";
import Pots from "./Pots";

async function PotServerComponent() {
    const pots = await getPots()
    return ( 
        <Pots pots={pots} />
    );
}

export default PotServerComponent;