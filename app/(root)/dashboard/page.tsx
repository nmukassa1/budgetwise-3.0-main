import { FC } from 'react';
import DesktopPage from "@/app/page/DesktopPage";
import MobilePage from '@/app/page/MobilePage';

const Dashboard: FC = () => {
    return ( 
        <div className="">
            <DesktopPage />
            <MobilePage />
        </div>
     );
}

export default Dashboard;