import Header from "./Header";

interface SummaryHeaderProps {
    title: string,
}

function SummaryHeader({title} : SummaryHeaderProps) {
    return ( 
        <div className='mt-auto w-[70%]'>
        <Header> {title} </Header>
    </div>
     );
}

export default SummaryHeader;