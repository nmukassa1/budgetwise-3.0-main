import { FC } from 'react';
import DesktopPage from "@/components/page/DesktopPage";
import MobilePage from '@/components/page/MobilePage';

const Dashboard: FC = () => {
    return ( 
        <div className="">
            <DesktopPage />
            <MobilePage />
        </div>
     );
}

export default Dashboard;