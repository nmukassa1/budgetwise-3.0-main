import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinksProps {
  icon: ReactNode;
  label: string;
  activeLabel: string;
  href?: string;
}

const NavLinks = ({ icon, label, activeLabel, href = '#' }: NavLinksProps) => {
  const isActive = label.toLowerCase() === activeLabel.toLowerCase();
  return (
    <Link
      href={href}
      className={`sidebar-item ${isActive ? 'bg-secondary text-primary' : 'text-gray-200 hover:bg-secondary hover:text-primary'}`}
    >
      {icon}
      <span className="mx-4 font-medium">{label}</span>
    </Link>
  );
};

export default NavLinks;