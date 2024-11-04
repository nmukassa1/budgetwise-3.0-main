import Link from 'next/link';

const NavLinks = ({ icon, label, activeLabel, setActiveLabel, href = '#' }) => {
  const isActive = label.toLowerCase() === activeLabel.toLowerCase();
  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? 'bg-secondary text-primary' : 'text-gray-200 hover:bg-secondary hover:text-primary'}`}
    >
      {icon}
      <span className="mx-4 font-medium">{label}</span>
    </Link>
  );
};

export default NavLinks;