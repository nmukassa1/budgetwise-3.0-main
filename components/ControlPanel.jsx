"use client"
import { Help, Logout, Settings } from "@mui/icons-material";
import SidebarItem from "./SidebarItem";


function ControlPanel({activeLabel, setActiveLabel}) {
    return(
        <div className='mb-4'>
            <SidebarItem icon={<Help sx={{ fontSize: '1.2rem' }} />} label="Help" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
            <SidebarItem icon={<Settings sx={{ fontSize: '1.2rem' }} />} label="Settings" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
            <SidebarItem icon={<Logout sx={{ fontSize: '1.2rem' }} />} label="Logout" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
        </div>
    )
    }

export default ControlPanel;