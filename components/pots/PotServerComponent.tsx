import Pots from "./Pots";
import { PotType } from "@/lib/types";

interface PotServerComponentProps {
    pots: PotType[];
}

const PotServerComponent: React.FC<PotServerComponentProps> = ({ pots }) => {
    return <Pots pots={pots} />;
};

export default PotServerComponent;