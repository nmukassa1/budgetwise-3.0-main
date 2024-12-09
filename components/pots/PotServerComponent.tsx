import Pots from "./Pots";

interface Pot {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    // Add other relevant fields here
}

interface PotServerComponentProps {
    pots: Pot[];
}

const PotServerComponent: React.FC<PotServerComponentProps> = ({ pots }) => {
    return <Pots pots={pots} />;
};

export default PotServerComponent;