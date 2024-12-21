import { Close } from "@mui/icons-material"
import { Drawer} from "@mui/material"
import AddWithdrawForm from "./AddWithdrawForm"

interface AddWithdrawMenuProps{
    openAddWithdrawMenu: boolean,
    setOpenAddWithdrawMenu: (value: boolean) => void,
    addWithdrawMenuAction: {
        withdrawOrAdd: string
    },
    setReFetchTransactions: (value: boolean) => void
}



// NOTE: CREATE FUNCTION IN SUPABASE THAT PREVENTS USERS FROM ADDING MORE MONET THAN THEY HAVE IN THEIR ACCOUNT

export default function AddWithdrawMenu({openAddWithdrawMenu, setOpenAddWithdrawMenu, addWithdrawMenuAction, setReFetchTransactions} : AddWithdrawMenuProps){


    const {withdrawOrAdd} = addWithdrawMenuAction

    return(
        <>
            <Drawer open={openAddWithdrawMenu} anchor="bottom" sx={{'& .MuiDrawer-paper': {background: '#161618', borderRadius: '21px 21px 0 0'}}}>
                <div className="bg-primary h-[50vh] text-secondary rounded-tl-md">
                    <div className="mobile-container">
                        <div className="py-2 flex">
                            <button onClick={() => setOpenAddWithdrawMenu(false)} className="ml-auto"><Close sx={{color: 'white'}} /></button>
                        </div>
                        <h1 className="text-center">{withdrawOrAdd.charAt(0).toUpperCase() + withdrawOrAdd.slice(1)}</h1>

                        
                        <AddWithdrawForm withdrawOrAdd={withdrawOrAdd} setReFetchTransactions={setReFetchTransactions}/>
                    </div>
                </div>
            </Drawer>
        </>
    )
}