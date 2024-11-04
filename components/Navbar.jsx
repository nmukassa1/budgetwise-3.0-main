import { Home, ReceiptLong, Savings } from "@mui/icons-material";
import ControlPanel from "./ControlPanel";
// import { navLinks } from "./navLinks";
import UserInfo from "./UserInfo";
import { PieChart } from "recharts";
import NavLinks from "./NavLinks";

const navLinks = [
    { icon: <Home sx={{ fontSize: '1.2rem' }} />, label: 'Overview', href: '/dashboard' },
    { icon: <ReceiptLong sx={{ fontSize: '1.2rem' }} />, label: 'Expenses', href: '/dashboard/expenses' },
    { icon: <PieChart sx={{ fontSize: '1.2rem' }} />, label: 'Budgets' },
    { icon: <Savings sx={{ fontSize: '1.2rem' }} />, label: 'Pots' },
    // { icon: <Schedule sx={{ fontSize: '1.2rem' }} />, label: 'Recurring Bills' },
  ];


function Navbar({activeLabel, setActiveLabel}) {
    return ( 
        <div className="navbar">
            <div className="flex flex-col h-full">

                {/* Nav */}
                <nav className='flex flex-col gap-2 mt-8 mb-auto'>
                    {navLinks.map((link, index) => (
                    <NavLinks key={index} icon={link.icon} label={link.label} href={link.href} activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
                    ))}
                </nav>

                <ControlPanel activeLabel={activeLabel} setActiveLabel={setActiveLabel} />   
                <UserInfo />
            </div>
        </div>
     );
}

export default Navbar;