import Analytics from "@/components/Analytics";
import Pnl from "@/components/Pnl";
import Pots from "@/components/mobile/Pots";
import Transactions from "@/components/Transactions";

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