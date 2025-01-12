import MutationButton from "./MutationButton";
import SummaryHeader from "./SummaryHeader";

function SectionSummary({title, openSpecificDraw}: {title: string, openSpecificDraw?: (open: boolean) => void}) {
   
    return ( 
        <div className='flex justify-between mt-auto'>
            <SummaryHeader title={title} />
            <MutationButton openSpecificDraw={openSpecificDraw} />
        </div>
     );
}

export default SectionSummary;