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
        <Drawer open={openDrawer} anchor={position} sx={{'& .MuiDrawer-paper': {background: '#1F1F1F', height: '100vh'}}}>
                <div className="text-secondary rounded-tl-md">
                    <div className="mobile-container relative">
                        <div className="text-right mt-4">
                            <button onClick={() => setOpenDrawer(false)}>
                                <div className="pointer-event-none">
                                    <Close />
                                </div>
                            </button>
                        </div>

                        <div className="">
                            {children}
                        </div>
                    </div>
                </div>
        </Drawer>
     );
}

export default DrawerContainerScreen;