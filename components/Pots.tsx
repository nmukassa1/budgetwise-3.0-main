
import Card from "./Card";
import CategoryHeader from "./CategoryHeader";
import PotItem from "./mobile/PotItem";

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
        },
    ]

    return ( 
        <Card className="text-white">
            <CategoryHeader categoryName='Pots' />
            <TotalSaved />
            <PotSlider data={data} />
        </Card>
     );
}

export default Pots;

function TotalSaved(){
    return(
        <div className="flex items-center justify-between text-sm">
            <div id="total-saved">
                Total Saved: £1,000
            </div>
            <div className="status flex gap-2">
                <button className="bg-gray-500 rounded-full py-1 px-2">Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

function PotSlider({data}){
    return(
        <div className="flex gap-2">
            {/* Create new pot button */}
            <div className="py-2">
                <button className="bg-secondary text-black px-4 py-2 h-full rounded-full">+</button>
            </div>

            <div className="slider overflow-scroll flex items-center gap-2 py-2">
                {data.map((pot, index) => (
                    <PotItem key={index} name={pot.name} progress={pot.progress} daysLeft={pot.daysLeft} />
                ))}
            </div>
        </div>
    )
}