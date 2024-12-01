import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  return (
    <div className='bg-primary h-full'>
        {children}
    </div>
  );
}