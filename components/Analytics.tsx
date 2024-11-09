import Category from "./Category";
import Item from './Item';
import CustomPieChart from './CustomPieChart';

export default function Analytics() {
    return (
        <Category categoryName="Top 5 Expenses">
            <div className="flex gap-2">
                <CustomPieChart />
                <div className="budget-item self-start flex-grow grid grid-cols-2 gap-4">
                    <Item potName='Food' amount={250} />
                    <Item potName='Utilities' amount={100} />
                    <Item potName='Entertainment' amount={32} />
                </div>
            </div>
        </Category>
    );
}

