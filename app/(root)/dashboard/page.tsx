
import ScrollIndicator from '@/components/common/ScrollIndicator';
import PotServerComponent from '@/components/pots/PotServerComponent';
import Summary from '@/components/summary/Summary';

const Dashboard  = async () => {
   

    return (
        <div className="h-[85vh] snap-y snap-mandatory overflow-scroll md:hidden relative">
           <Summary />
           <PotServerComponent />
           <ScrollIndicator />
        </div>
    );
};

export default Dashboard;
