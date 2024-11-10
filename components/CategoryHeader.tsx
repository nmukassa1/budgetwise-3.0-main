import Link from "next/link";

interface CategoryHeaderProps {
    categoryName: string;
  }

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ categoryName }) => {
    return (
      <header className='flex items-center justify-between'>
        <h1 className='text-primary font-bold text-xl'>{categoryName}</h1>
        <Link href={`/dashboard/${categoryName.toLowerCase()}`} passHref>View All</Link>
      </header>
    );
  }
  
  export default CategoryHeader;