import Navbar from '@/components/common/Navbar';
import UserAvatar from '@/components/UserProfile/UserAvatar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  return (
    <div className='h-full'>
        <UserAvatar />
        {children}
        <Navbar />
    </div>
  );
}