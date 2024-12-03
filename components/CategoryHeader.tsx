import Link from "next/link";

interface CategoryHeaderProps {
    categoryName: string;
    className?: string;
    textColor?: string;
  }

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ categoryName, className, textColor = 'text-white' }) => {
    return (
      <header className='flex items-center justify-between'>
        <h1 className={`${textColor} ${className} font-bold text-xl`}>{categoryName}</h1>
        <Link href={`/dashboard/${categoryName.toLowerCase()}`} passHref>View All</Link>
      </header>
    );
  }
  
  export default CategoryHeader;