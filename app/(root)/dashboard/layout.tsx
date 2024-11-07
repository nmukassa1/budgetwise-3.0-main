"use client"

import Sidebar from '@/components/Sidebar';
import MonthNavigator from '@/components/MonthNavigator';
import { usePathname } from "next/navigation";
import { ReactNode } from 'react';
import MobileNavbar from '@/components/MobileNavbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  let pathname: string = usePathname();
  pathname = pathname.split('/').pop()?.toLowerCase() || '';
  let header: string = pathname === 'dashboard' ? 'Overview' : pathname.charAt(0).toUpperCase() + pathname.slice(1);

  return (
    <div className='flex bg-background h-full'>
      <Sidebar />
      {/* <MobileNavbar activeLabel={header} setActiveLabel={() => {}} /> */}
      <div className='flex-grow px-10 py-8'>
        <div className='flex items-center justify-between mb-4'>
          <h1 className="text-primary text-2xl font-bold">{header}</h1>
          <MonthNavigator />
        </div>
        {children}
      </div>
    </div>
  );
}