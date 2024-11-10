import Card from "../Card";
import CategoryHeader from "../CategoryHeader";
import PotItem from "./PotItem";

function Pots() {

    const data = [
        {
            name: 'Holiday Fund',
            progress: '£500 / £1000',
            daysLeft: '30'
        },
        {
            name: 'Emergency Fund',
            progress: '£100 / £500',
            daysLeft: '30'
        }
    ]

    return ( 
        // <div>
        <Card className="bg-secondary">
            <CategoryHeader categoryName='Pots' />
            <div className="slider overflow-scroll flex items-center gap-2 py-2">
              {data.map((pot, index) => (
                <PotItem key={index} name={pot.name} progress={pot.progress} daysLeft={pot.daysLeft} />
                ))}
            </div>
        </Card>
        // </div> 
     );
}

export default Pots;