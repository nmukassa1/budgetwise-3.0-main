import { useState } from 'react';
import { Home, ReceiptLong, PieChart, Savings, Menu } from '@mui/icons-material';
import ControlPanel from "./ControlPanel";
import UserInfo from "./UserInfo";
import NavLinks from "./NavLinks";

interface NavLink {
  icon: JSX.Element;
  label: string;
  href: string;
}

interface NavbarProps {
  activeLabel: string;
  setActiveLabel: (label: string) => void;
}

function MobileNavbar({ activeLabel, setActiveLabel }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { icon: <Home sx={{ fontSize: '1.2rem' }} />, label: 'Overview', href: '/dashboard' },
    { icon: <ReceiptLong sx={{ fontSize: '1.2rem' }} />, label: 'Expenses', href: '/dashboard/expenses' },
    { icon: <PieChart sx={{ fontSize: '1.2rem' }} />, label: 'Budgets', href: '/dashboard/budgets' },
    { icon: <Savings sx={{ fontSize: '1.2rem' }} />, label: 'Pots', href: '/dashboard/pots' },
  ];

  return (
    <div className="mobile-navbar">
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">App Name</div>
        <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      {isMenuOpen && (
        <div className="flex flex-col gap-2 mt-4">
          {navLinks.map((link, index) => (
            <NavLinks
              key={index}
              icon={link.icon}
              label={link.label}
              href={link.href}
              activeLabel={activeLabel}
              setActiveLabel={setActiveLabel}
            />
          ))}
          <ControlPanel activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
          <UserInfo />
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;