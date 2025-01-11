import MutationButton from "./MutationButton";
import SummaryHeader from "./SummaryHeader";

function SectionSummary({title}: {title: string}) {
    return ( 
        <div className='flex justify-between mt-auto'>
            <SummaryHeader title={title} />
            <MutationButton />
        </div>
     );
}

export default SectionSummary;