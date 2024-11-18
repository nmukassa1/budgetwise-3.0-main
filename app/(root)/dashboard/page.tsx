import { FC } from 'react';
import DesktopPage from "@/app/page/DesktopPage";
import MobilePage from '@/app/page/MobilePage';
import { getCategories } from '@/lib/queries';

const Dashboard: FC = async () => {
    const categoriesTest = await getCategories();
    if(categoriesTest){
        console.log(categoriesTest);
    }
    return ( 
        <div className="">
            <DesktopPage />
            <MobilePage />
        </div>
     );
}

export default Dashboard;