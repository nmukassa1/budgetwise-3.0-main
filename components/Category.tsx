import Link from 'next/link';
import Card from './Card';
import { ReactNode, FC } from 'react';
import CategoryHeader from './CategoryHeader';

interface CategoryProps {
  categoryName: string;
  children: ReactNode;
}

const Category: FC<CategoryProps> = ({ categoryName, children }) => {
  return (
    <Card className="masonry-item bg-secondary">
      <CategoryHeader categoryName={categoryName} />
      <div className="mt-4">
        {children}
      </div>
    </Card>
  );
}

export default Category;