import { FC } from 'react';
import MobileHero from '@/components/mobile/MobileHero';
import Footer from '@/components/Footer';
import Pots from '@/components/pots/Pots';
import Budget from '@/components/Budget';

const Dashboard: FC = async () => {
    return ( 
        <div className="h-full md:hidden">
            <MobileHero />
            <div className="mobile-container flex flex-col gap-4">
                <Pots />
                <Budget />
            </div>
            <Footer />
        </div>
     );
}

export default Dashboard;