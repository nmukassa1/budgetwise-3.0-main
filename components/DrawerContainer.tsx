import { Close } from "@mui/icons-material";
import { Drawer } from "@mui/material";


interface DrawerContainerProps{
    children: React.ReactNode,
    openDrawer: boolean,
    setOpenDrawer: (open: boolean) => void;
}

function DrawerContainer({children, openDrawer, setOpenDrawer} : DrawerContainerProps) {


    return ( 
        <Drawer open={openDrawer} anchor="bottom" sx={{'& .MuiDrawer-paper': {background: '#161618', borderRadius: '21px 21px 0 0'}}}>
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