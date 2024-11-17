import { Help, Settings } from "@mui/icons-material";
import NavLinks from "./NavLinks";
import { FC } from 'react';
import Logout from "./auth/Logout";

interface ControlPanelProps {
  activeLabel: string;
  setActiveLabel: (label: string) => void;
}

const ControlPanel: FC<ControlPanelProps> = ({ activeLabel, setActiveLabel }) => {

  const iconSize: string = '1.2rem';

  return (
    <div className='mb-4'>
      <NavLinks icon={<Help sx={{ fontSize: iconSize }} />} label="Help" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
      <NavLinks icon={<Settings sx={{ fontSize: iconSize }} />} label="Settings" activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
      {/* <NavLinks icon={<Logout sx={{ fontSize: iconSize }} />} label="Logout" activeLabel={activeLabel} setActiveLabel={setActiveLabel} /> */}
      <Logout />
    </div>
  );
}

export default ControlPanel;