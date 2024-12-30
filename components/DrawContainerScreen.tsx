import { Close } from "@mui/icons-material";
import { Drawer } from "@mui/material";


interface DrawerContainerScreenProps{
    children: React.ReactNode,
    openDrawer: boolean,
    setOpenDrawer: (open: boolean) => void;
    position?: 'top' | 'bottom' ;
}

function DrawerContainerScreen({children, openDrawer, setOpenDrawer, position} : DrawerContainerScreenProps) {


    return ( 
        <Drawer open={openDrawer} anchor={position} sx={{'& .MuiDrawer-paper': {background: '#161618'}}}>
                <div className="bg-primary h-screen text-secondary rounded-tl-md">
                    <div className="mobile-container relative h-full overflow-hidden">
                        <div className="text-right mt-4">
                            <button onClick={() => setOpenDrawer(false)}>
                                <div className="pointer-event-none">
                                    <Close />
                                </div>
                            </button>
                        </div>

                        <div className="h-full">
                            {children}
                        </div>
                    </div>
                </div>
        </Drawer>
     );
}

export default DrawerContainerScreen;