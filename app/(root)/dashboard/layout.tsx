"use client"

import MobileLayout from '@/app/layout/MobileLayout';
import DesktopLayout from '@/app/layout/DesktopLayout';
import LoadingScreen from '@/components/LoadingScreen';
import { useBreakpointChange } from '@/lib/hooks/useBreakpointChange';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const {isMobile, isLoading } = useBreakpointChange();

  return (
    <div className='bg-background h-full'>
      {isLoading && <LoadingScreen />}
      {isMobile ? (
        <MobileLayout>{children}</MobileLayout>
      ) : (
        <DesktopLayout>{children}</DesktopLayout>
      )}
    </div>
  );
}