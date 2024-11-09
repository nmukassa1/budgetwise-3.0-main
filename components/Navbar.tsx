import { Home, ReceiptLong, PieChart, Savings } from '@mui/icons-material';
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

function Navbar({ activeLabel, setActiveLabel }: NavbarProps) {

  const navLinks: NavLink[] = [
    { icon: <Home sx={{ fontSize: '1.2rem' }} />, label: 'Overview', href: '/dashboard' },
    { icon: <ReceiptLong sx={{ fontSize: '1.2rem' }} />, label: 'Expenses', href: '/dashboard/expenses' },
    { icon: <PieChart sx={{ fontSize: '1.2rem' }} />, label: 'Budgets', href: '/dashboard/budgets' },
    { icon: <Savings sx={{ fontSize: '1.2rem' }} />, label: 'Pots', href: '/dashboard/pots' },
    // { icon: <Schedule sx={{ fontSize: '1.2rem' }} />, label: 'Recurring Bills', href: '/dashboard/recurring-bills' },
  ];

  return (
    <div className="navbar">
      <div className="flex flex-col h-full">
        {/* Nav */}
        <nav className="flex flex-col gap-2 mt-8 mb-auto">
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
        </nav>
        <ControlPanel activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
        <UserInfo />
      </div>
    </div>
  );
}

export default Navbar;