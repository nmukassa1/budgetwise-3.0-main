import MobileHero from "@/components/mobile/MobileHero";
// import Transactions from "@/components/mobile/Transactions";
import Transactions from "@/components/Transactions";
import Pots from "@/components/mobile/Pots";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
// import TransactionContainer from "@/components/TransactionContainer";

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