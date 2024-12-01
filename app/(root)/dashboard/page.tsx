import { FC } from 'react';
import MobileHero from '@/components/mobile/MobileHero';
import Transactions from '@/components/Transactions';
import Analytics from '@/components/Analytics';
import Footer from '@/components/Footer';
import Pots from '@/components/Pots';
import Budget from '@/components/Budget';

const Dashboard: FC = async () => {
    return ( 
        <div className="h-full md:hidden">
            <MobileHero />
            <div className="mobile-container flex flex-col gap-4">
                <Pots />
                <Budget />
                {/* <Transactions />
                <Analytics /> */}
            </div>
            <Footer />
        </div>
     );
}

export default Dashboard;