import Link from 'next/link';

const SidebarItem = ({ icon, label, activeLabel, setActiveLabel, href = '#' }) => {
  const isActive = label.toLowerCase() === activeLabel.toLowerCase();
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 text-[1rem] transition-colors duration-200 transform rounded-lg cursor-pointer ${isActive ? 'bg-secondary text-primary' : 'text-gray-200 hover:bg-secondary hover:text-primary'} overflow-hidden`}
    >
      {icon}
      <span className="mx-4 font-medium">{label}</span>
    </Link>
  );
};

export default SidebarItem;