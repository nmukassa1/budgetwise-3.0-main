import { Close } from "@mui/icons-material";
import { Drawer } from "@mui/material";


interface DrawerContainerProps{
    children: React.ReactNode,
    openDrawer: boolean,
    setOpenDrawer: (open: boolean) => void;
    position?: 'top' | 'bottom' ;
}

function DrawerContainer({children, openDrawer, setOpenDrawer, position} : DrawerContainerProps) {

    const borderRadius = position === 'top' ? '0 0 21px 21px' : '21px 21px 0 0';

    return ( 
        <Drawer open={openDrawer} anchor={position} sx={{'& .MuiDrawer-paper': {background: '#161618', borderRadius: borderRadius}}}>
                <div className="bg-primary h-[50vh] text-secondary rounded-tl-md">
                    <div className="mobile-container relative">
                        <div className="text-right mt-4">
                            <button onClick={() => setOpenDrawer(false)}>
                                <div className="pointer-event-none">
                                    <Close />
                                </div>
                            </button>
                        </div>

                        <div>
                            {children}
                        </div>
                    </div>
                </div>
        </Drawer>
     );
}

export default DrawerContainer;