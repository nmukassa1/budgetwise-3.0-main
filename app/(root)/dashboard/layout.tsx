"use client"

import Sidebar from '@/components/Sidebar';
import { usePathname } from "next/navigation";
import { ReactNode } from 'react';

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
      <div className='flex-grow px-10 py-8'>
        <h1 className="text-primary text-2xl font-bold mb-4">{header}</h1>
        {children}
      </div>
    </div>
  );
}