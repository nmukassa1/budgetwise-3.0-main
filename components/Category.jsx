import Link from 'next/link';
import Card from './Card';



export default function Category({categoryName, children}) {
    return (
        <Card className="masonry-item bg-secondary">
            <CategoryHeader categoryName={categoryName} />
            <div className="mt-4">
                {children}
            </div>
        </Card>
    )
}

function CategoryHeader({categoryName}){
    return(
        <header className='flex items-center justify-between'>
            <h1 className='text-primary font-bold text-xl'>{categoryName}</h1>
            <Link href={`/dashboard/${categoryName.toLowerCase()}`} passHref>View All</Link>
        </header>
    )
}