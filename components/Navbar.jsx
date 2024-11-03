import ControlPanel from "./ControlPanel";
import { navLinks } from "./navLinks";
import SidebarItem from "./SidebarItem";
import UserInfo from "./UserInfo";

function Navbar({activeLabel, setActiveLabel}) {
    return ( 
        <div className="navbar-container">
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
     );
}

export default Navbar;