"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { formatPathname } from '../lib/utils';
import Navbar from './Navbar';
import ToggleNavbarButton from './ToggleNavbarButton';
import UserInfo from './UserInfo';

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
    <div className={`sidebar ${isVisible ? 'w-[250px] px-4 py-8' : 'w-[0] px-0'}`}>
      <h2 className="text-3xl font-semibold text-white">Budgetwise</h2>
      <Navbar activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
      <ToggleNavbarButton toggleSidebar={toggleSidebar} isVisible={isVisible} />
    </div>
  );
};

export default Sidebar;
