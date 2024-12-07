import Card from "@/components/Card";
import CategoryHeader from "@/components/CategoryHeader";
import { getPots, getTransactionsById } from "@/lib/queries";
import PotSlider from "./PotSlider";
import TotalSaved from "./TotalSaved";


async function Pots() {

    const pots = await getPots()
    // const transactions = await getTransactionsById();


    return ( 
        <Card className="text-white">
            <CategoryHeader categoryName='Pots' />
            <TotalSaved pots={pots} />
            <PotSlider pots={pots} />
        </Card>
     );
}

export default Pots;




