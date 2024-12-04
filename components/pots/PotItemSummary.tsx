"use client"

import { Drawer, FormControlLabel, Switch } from "@mui/material"
import Card from "../Card"
import CategoryHeader from "../CategoryHeader"
import { useState } from "react"
import { Close } from "@mui/icons-material"

interface PotItemSummaryProps{
    filteredPot: {
        id: number,
        name: string,
        current_amount: number
    },
    togglePotSummary: boolean,
    setTogglePotSummary: Function
}

interface AddWithdrawMenuProps{
    openAddWithdrawMenu: boolean,
    setOpenAddWithdrawMenu: Function,
    addWithdrawMenuAction: {
        method: string,
        name: string
    }
}

export default function PotItemSummary({filteredPot, togglePotSummary, setTogglePotSummary} : PotItemSummaryProps){

    const [openAddWithdrawMenu, setOpenAddWithdrawMenu] = useState(false)
    const [addWithdrawMenuAction, setAddWithdrawMenuAction] = useState<{ method: string, name: string }>({ method: '', name: '' })

    function handleDrawClose(){
        setTogglePotSummary(false)
    }

    function handleAddWithdrawMenuOpen(e){
        const name = e.target.id;
        const actionObj = {
            //Method will be mutation function for database
            method: '',
            name: name
        }
        setAddWithdrawMenuAction(actionObj)
        setOpenAddWithdrawMenu(true)
    }

    return(
        <Drawer open={togglePotSummary} anchor="top" sx={{'& .MuiDrawer-paper': {background: '#161618'}}}>
            <div className="h-screen mobile-container flex flex-col items-center text-white py-4">
                <h1>{filteredPot?.name}</h1>

                    <div className="box w-[130px] h-[130px] overflow-hidden rounded-md bg-primary mt-6 mb-4">
                        {/* Placeholder box */}
                    </div>

                    <div className="current_amount w-fit">£{filteredPot?.current_amount?.toLocaleString()}</div>

                    <div className="flex items-center gap-4 mt-2">
                        <button onClick={handleAddWithdrawMenuOpen} id="withdraw">- Withdraw</button>
                        <button onClick={handleAddWithdrawMenuOpen} id="add">+ Add money</button>
                    </div>

                    <Card className="w-full bg-primary p-4 rounded-md mt-8">
                        <CategoryHeader categoryName="Activity"  />

                        <div className="mt-4">
                            <ul className=" overflow-hidden max-h-[135.5px]">
                                <li className="flex items-center justify-between py-4 border-b">
                                    <div className="icon h-[30px] w-[30px] bg-background rounded-full"></div>
                                    <div className="text">You added £100</div>
                                </li>
                                <li className="flex items-center justify-between py-4 border-b">
                                    <div className="icon h-[30px] w-[30px] bg-background rounded-full"></div>
                                    <div className="text">You added £100</div>
                                </li>
                            </ul>
                            <button className="mt-4">See All</button>
                        </div>
                    </Card>
                
                    
                <button onClick={handleDrawClose} className="mt-4 bg-primary text-secondary py-4 px-6 rounded-md w-full">Close</button>
                
                <AddWithdrawMenu openAddWithdrawMenu={openAddWithdrawMenu} setOpenAddWithdrawMenu={setOpenAddWithdrawMenu} addWithdrawMenuAction={addWithdrawMenuAction} />
            </div>
        </Drawer>
    )
}



function AddWithdrawMenu({openAddWithdrawMenu, setOpenAddWithdrawMenu, addWithdrawMenuAction} : AddWithdrawMenuProps){

    const {name} = addWithdrawMenuAction

    return(
        <>
            <Drawer open={openAddWithdrawMenu} anchor="bottom" sx={{'& .MuiDrawer-paper': {background: '#161618'}}}>
                <div className="bg-primary h-[50vh] text-secondary">
                    <div className="mobile-container">
                        <div className="py-2 flex">
                            <button onClick={() => setOpenAddWithdrawMenu(false)} className="ml-auto"><Close sx={{color: 'white'}} /></button>
                        </div>
                        <h1 className="text-center">{name} money</h1>

                        <form action="">
                            <div className="text-secondary p-4 border-white border-2 flex items-center gap-2 mt-4 rounded-md">
                                <div>£</div> 
                                <input type="text" placeholder="0.00" className="bg-transparent w-full focus:outline-none"/>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-4">
                                <FormControlLabel 
                                    control={<Switch name="repeat" />}
                                    label="Repeat?"
                                    labelPlacement="start"
                                />
                            </div>

                            <button type="submit" 
                            className="w-full bg-secondary text-primary py-4 rounded-md mt-4"
                            >   
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </Drawer>
        </>
    )
}