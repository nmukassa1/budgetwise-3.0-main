"use client"

import { Drawer, LinearProgress, Modal } from "@mui/material"
import Card from "../../Card"
import CategoryHeader from "../../CategoryHeader"
import { useEffect, useState } from "react"
import { usePot } from "@/lib/context/PotContext"
import AddWithdrawMenu from "./AddWithdrawMenu"
import { getTransactionsById } from "@/lib/queries"
import { Add, Close, Delete, Edit } from "@mui/icons-material"
import { deletePot, editPot } from "@/lib/mutations"
import { currencyFormat } from "@/lib/utils"
import Header from "./Header"
import AddWithdrawButtons from "./AddWithdrawButtons"
import Activities from "./Activities"
import Goals from "./Goals"

interface PotItemSummaryProps{
    togglePotSummary: boolean,
    setTogglePotSummary: Function
}

export default function PotItemSummary({ togglePotSummary, setTogglePotSummary} : PotItemSummaryProps){
    
    
    const potItem = usePot()


    const [openAddWithdrawMenu, setOpenAddWithdrawMenu] = useState(false)
    const [addWithdrawMenuAction, setAddWithdrawMenuAction] = useState<{  withdrawOrAdd: string }>({ withdrawOrAdd: '' })

    const [transactions, setTransactions] = useState<Array<any>>([])
    const [reFetchTransactions, setReFetchTransactions] = useState(false)
  

    useEffect(() => {
       async function fetchTransactions(){
            const transactions = await getTransactionsById(potItem.id)
            transactions && transactions.length > 0 ? setTransactions(transactions) : []
        }
        fetchTransactions()

    }, [potItem.id])
   

    function handleDrawClose(){
        setTogglePotSummary(false)
    }

    function handleAddWithdrawMenuOpen(e){
        const name = e.target.id;
        const actionObj = {
            //Method will be mutation function for database
            withdrawOrAdd: name
        }
        setAddWithdrawMenuAction(actionObj)
        setOpenAddWithdrawMenu(true)
    }

   
  
    return(
        <Drawer open={togglePotSummary} anchor="top" sx={{'& .MuiDrawer-paper': {background: '#161618'}}}>
            <div className="h-screen mobile-container flex flex-col items-center text-white py-4">
                <Header />

                    {/* <div className="box w-[130px] h-[130px]  rounded-md bg-primary mt-6 mb-4"> */}
                        {/* Placeholder box */}
                    {/* </div> */}
                    <CurrentBalance potItem={potItem} />
                    <AddWithdrawButtons potItem={potItem} handleAddWithdrawMenuOpen={handleAddWithdrawMenuOpen} />
                    <div className="w-full">
                        <Activities reFetchTransactions={reFetchTransactions} setReFetchTransactions={setReFetchTransactions} />
                        <Goals />
                    </div>
                    
                <button onClick={handleDrawClose} className="mt-4 bg-primary text-secondary py-4 px-6 rounded-md w-full">Close</button>
                
                <AddWithdrawMenu openAddWithdrawMenu={openAddWithdrawMenu} setOpenAddWithdrawMenu={setOpenAddWithdrawMenu} addWithdrawMenuAction={addWithdrawMenuAction} setReFetchTransactions={setReFetchTransactions}/>
            </div>
        </Drawer>
    )
}



function CurrentBalance({potItem}){
    return(<div className="current_amount w-fit text-2xl mt-6">£{potItem?.current_amount?.toLocaleString()}</div>)
}