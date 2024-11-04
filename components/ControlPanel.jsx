"use client"
import { Help, Logout, Settings } from "@mui/icons-material";
import NavLinks from "./NavLinks";


function ControlPanel({activeLabel, setActiveLabel}) {
    return(
        <div className='mb-4'>
            <NavLinks icon={<Help sx={{ fontSize: '1.2rem' }} />} label="Help" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
            <NavLinks icon={<Settings sx={{ fontSize: '1.2rem' }} />} label="Settings" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
            <NavLinks icon={<Logout sx={{ fontSize: '1.2rem' }} />} label="Logout" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
        </div>
    )
    }

export default ControlPanel;