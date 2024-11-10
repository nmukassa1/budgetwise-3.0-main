import Analytics from "../Analytics";
import Pnl from "../Pnl";
import Pots from "../mobile/Pots";
// import Pots from "../Pots";
import Transactions from "../Transactions";

function DesktopPage() {
    return (
    <div className="hidden md:block">
        <Pnl />
        <div className="masonry-layout">
            <Pots />
            <Analytics />
            <Transactions />
        </div>
    </div>
     );
}

export default DesktopPage;