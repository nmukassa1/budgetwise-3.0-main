import { FC } from 'react';
import MobileHero from '@/components/mobile/MobileHero';
import Transactions from '@/components/Transactions';
import Analytics from '@/components/Analytics';
import Footer from '@/components/Footer';
import Pots from '@/components/Pots';

const Dashboard: FC = async () => {
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

export default Dashboard;