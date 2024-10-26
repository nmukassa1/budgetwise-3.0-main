"use client"
import { useState, useEffect } from 'react';
import { Help, Settings, Logout, } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';
import UserInfo from './UserInfo';
import { navLinks } from './navLinks';
import { formatPathname } from './utils';

const Sidebar = () => {
  const pathname = usePathname();
  const [activeLabel, setActiveLabel] = useState(formatPathname(pathname));
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setActiveLabel(formatPathname(pathname));
  }, [pathname]);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`relative overflow-hidden rounded-tr-2xl transition-width duration-300 ${isVisible ? 'w-[250px]' : 'w-[0]'}`}>
      <div className="flex flex-col shrink-0 h-screen px-4 py-8 bg-primary text-secondary">
        <h2 className="text-3xl font-semibold text-white">Budgetwise</h2>
        <div className="flex flex-col h-full">

          {/* Nav */}
          <nav className='flex flex-col gap-2 mt-8 mb-auto'>
            {navLinks.map((link, index) => (
              <SidebarItem key={index} icon={link.icon} label={link.label} href={link.href} activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
            ))}
          </nav>

          <ControlPanel activeLabel={activeLabel} setActiveLabel={setActiveLabel} />  
            
          {/* User Info */}
          <UserInfo />
        </div>
      </div>
      <button className="fixed top-4 right-4 p-2 bg-secondary text-primary rounded-lg" onClick={toggleSidebar}>
        {isVisible ? 'Hide' : 'Show'} Sidebar
      </button>
    </div>
  );
};

export default Sidebar;

function ControlPanel({activeLabel, setActiveLabel}) {
  return(
    <div className='mb-4'>
      <SidebarItem icon={<Help sx={{ fontSize: '1.2rem' }} />} label="Help" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
      <SidebarItem icon={<Settings sx={{ fontSize: '1.2rem' }} />} label="Settings" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
      <SidebarItem icon={<Logout sx={{ fontSize: '1.2rem' }} />} label="Logout" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
    </div>
  )
}