import SectionLayout from "@/components/common/SectionLayout";
import Header from "@/components/common/Header";
import CircleDesign from "@/components/common/CircleDesign";
import RenderPots from "../RenderPots";
import SectionSummary from "@/components/common/SectionSummary";
import PotItemSummary from "./PotItemSummary";
import NewPot from "../NewPot";
import { usePot } from "@/lib/context/PotContext";

    function TemporaryName() {
        const {pots, setOpenNewPotFormDrawer} = usePot()
        const totalSaved = pots.reduce((acc, pot) => acc + (pot.current_amount ?? 0), 0).toLocaleString()
        return ( 
            <SectionLayout>
                <Header>Pots</Header>
                <CircleDesign bgColor="bg-blue-500" />
                <RenderPots /> 
                <SectionSummary title={`Total saved: £${totalSaved}`} openSpecificDraw={setOpenNewPotFormDrawer} />
                <PotItemSummary />
                <NewPot />
            </SectionLayout>
         );
    }
    
    export default TemporaryName;