import { ReactNode } from "react";
import Sidebar from "../Sidebar";
import { usePathname } from "next/navigation";
import MonthNavigator from "../MonthNavigator";

interface LayoutProps {
    children: ReactNode;
  }

const DesktopLayout = ({ children }: LayoutProps) => {
    let pathname: string = usePathname();
    pathname = pathname.split('/').pop()?.toLowerCase() || '';
    let header: string = pathname === 'dashboard' ? 'Overview' : pathname.charAt(0).toUpperCase() + pathname.slice(1);
    return (
      <div className='h-full flex'>
        <Sidebar />
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
  
  export default DesktopLayout;