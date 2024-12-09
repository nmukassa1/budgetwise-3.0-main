import { FC } from 'react';
import MobileHero from '@/components/mobile/MobileHero';
import Footer from '@/components/Footer';
import Pots from '@/components/pots/Pots';
import Budget from '@/components/Budget';
import PotServerComponent from '@/components/pots/PotServerComponent';

const Dashboard: FC = async () => {
    return ( 
        <div className="h-full md:hidden">
            <MobileHero />
            <div className="mobile-container flex flex-col gap-4">
                {/* <Pots /> */}
                <PotServerComponent />
                <Budget />
            </div>
            <Footer />
        </div>
     );
}

export default Dashboard;