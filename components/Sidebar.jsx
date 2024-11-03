"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { formatPathname } from '../lib/utils';
import Navbar from './Navbar';
import ToggleNavbarButton from './ToggleNavbarButton';

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
      <Navbar activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
      <ToggleNavbarButton toggleSidebar={toggleSidebar} isVisible={isVisible} />
    </div>
  );
};

export default Sidebar;
