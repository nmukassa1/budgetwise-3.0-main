"use client"
import { useState, useEffect } from 'react';
import { Home, ReceiptLong, PieChart, Savings, Schedule, Help, Settings, Logout, PersonOutline } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  
  const formatPathname = (path) => {
    let formattedPath = path.split('/').pop().toLowerCase();
    formattedPath = formattedPath === 'dashboard' ? 'overview' : formattedPath;
    return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
  };

  const [activeLabel, setActiveLabel] = useState(formatPathname(pathname));
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setActiveLabel(formatPathname(pathname));
  }, [pathname]);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const navLinks = [
    { icon: <Home sx={{fontSize: '1.2rem'}} />, label: 'Overview', href: '/dashboard' },
    { icon: <ReceiptLong sx={{fontSize: '1.2rem'}} />, label: 'Expenses', href: '/dashboard/expenses' },
    { icon: <PieChart sx={{fontSize: '1.2rem'}} />, label: 'Budgets' },
    { icon: <Savings sx={{fontSize: '1.2rem'}} />, label: 'Pots' },
    { icon: <Schedule sx={{fontSize: '1.2rem'}} />, label: 'Recurring Bills' },
  ]
  
  return (
    <div className={`relative overflow-hidden rounded-tr-2xl transition-width duration-300  ${isVisible ? 'w-[250px]' : 'w-[0]'}`}>
      <div className={`flex flex-col shrink-0 h-screen px-4 py-8 bg-primary text-secondary`}>
        <h2 className="text-3xl font-semibold text-white">Budgetwise</h2>
        
        <div className="flex flex-col justify-between flex-1 mt-4">
            <nav>
                {navLinks.map((link, index) => (
                    <SidebarItem key={index} icon={link.icon} label={link.label} href={link.href} activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
                ))}
            </nav>

            <div>
                <SidebarItem icon={<Help sx={{fontSize: '1.2rem'}} />} label="Help" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
                <SidebarItem icon={<Settings sx={{fontSize: '1.2rem'}} />} label="Settings" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
                <SidebarItem icon={<Logout sx={{fontSize: '1.2rem'}} />} label="Logout" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
            </div>

            
            <div id='user' className='flex gap-4 items-center border-t-2 pt-4 my-2'>
                <PersonOutline sx={{fontSize: '1.2rem'}} />
                <div>
                    <p className="text-[.9rem]">Nyah Mukassa</p>
                    <p className="text-[.9rem]">example@email.com</p>
                </div>
            </div>

        </div>
      </div>
      
      <button 
        className="fixed top-4 right-4 p-2 bg-secondary text-primary rounded-lg"
        onClick={toggleSidebar}
      >
        {isVisible ? 'Hide' : 'Show'} Sidebar
      </button>
    </div>
  );
};

const SidebarItem = ({ icon, label, activeLabel, setActiveLabel, href = '#' }) => {
  const isActive = label.toLowerCase() === activeLabel.toLowerCase();
  return (
    <Link
      href={href} 
      className={`flex items-center px-4 py-2 mt-5 text-[1rem] transition-colors duration-200 transform rounded-lg cursor-pointer ${isActive ? 'bg-secondary text-primary' : 'text-gray-200 hover:bg-secondary hover:text-primary'} overflow-hidden`}
    >
      {icon}
      <span className="mx-4 font-medium">{label}</span>
    </Link>
  );
};

export default Sidebar;