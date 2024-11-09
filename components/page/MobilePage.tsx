import MobileHero from "../mobile/MobileHero";
import Transactions from "../mobile/Transactions";
import Pots from "../mobile/Pots";
import Analytics from "../Analytics";
import Footer from "../Footer";

function MobilePage() {
    return ( 
        <div className="h-full md:hidden">
            <MobileHero />
            <div className="mobile-container mt-10 flex flex-col gap-4">
                <Pots />
               <Transactions />
               <Analytics />
            </div>
            <Footer />
        </div>
     );
}

export default MobilePage;