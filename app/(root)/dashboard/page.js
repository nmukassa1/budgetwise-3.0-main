import Pnl from "@components/Pnl";
import Pots from "@components/Pots";
import Analytics from "@components/Analytics";
import Transactions from "@components/Transactions";

function Dashboard() {

    return ( 
        <div className="">
            <Pnl />
            <div className="masonry-layout">
                <Pots />
                <Analytics />
                <Transactions />
            </div>
        </div>
     );
}

export default Dashboard;