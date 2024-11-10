import MobileHero from "../mobile/MobileHero";
import Transactions from "../Transactions"
// import Transactions from "../mobile/Transactions";
import Pots from "../mobile/Pots";
import Analytics from "../Analytics";
import Footer from "../Footer";
import TransactionContainer from "../TransactionContainer";

function MobilePage() {
    return ( 
        <div className="h-full md:hidden">
            <MobileHero />
            <div className="mobile-container mt-10 flex flex-col gap-4">
                <Pots />
               <Transactions />
               {/* <TransactionContainer /> */}
               <Analytics />
            </div>
            <Footer />
        </div>
     );
}

export default MobilePage;