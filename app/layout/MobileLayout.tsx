import { ReactNode } from 'react';

interface MobileLayoutProps {
    children: ReactNode;
}

function MobileLayout({ children }: MobileLayoutProps) {
    return ( <>{children}</> );
}

export default MobileLayout;
