"use client"

import { Drawer, LinearProgress } from "@mui/material"
import Card from "../Card"
import CategoryHeader from "../CategoryHeader"
import { useEffect, useState } from "react"
import { usePot } from "@/lib/context/PotContext"
import AddWithdrawMenu from "./AddWithdrawMenu"
import { getTransactionsById } from "@/lib/queries"

interface PotItemSummaryProps{
    togglePotSummary: boolean,
    setTogglePotSummary: Function
}



export default function PotItemSummary({ togglePotSummary, setTogglePotSummary} : PotItemSummaryProps){
    
    const potItem = usePot()


    const [openAddWithdrawMenu, setOpenAddWithdrawMenu] = useState(false)
    const [addWithdrawMenuAction, setAddWithdrawMenuAction] = useState<{  withdrawOrAdd: string }>({ withdrawOrAdd: '' })
    const [transactions, setTransactions] = useState<Array<any>>([])

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
                <h1>{potItem?.name}</h1>

                    <div className="box w-[130px] h-[130px] overflow-hidden rounded-md bg-primary mt-6 mb-4">
                        {/* Placeholder box */}
                    </div>

                    <div className="current_amount w-fit">£{potItem?.current_amount?.toLocaleString()}</div>

                    <div className="flex items-center gap-4 mt-2">
                        {potItem?.current_amount > 0 && <button onClick={handleAddWithdrawMenuOpen} id="withdraw">- Withdraw</button>}
                        <button onClick={handleAddWithdrawMenuOpen} id="add">+ Add money</button>
                    </div>

                    <div className="w-full">
                        {/* Activities */}
                        <Card className="w-full bg-primary p-4 rounded-md mt-8">
                            <CategoryHeader categoryName="Activity"  />

                            <div className="mt-4">
                                {transactions.length === 0 && <p>No transactions found</p>}
                                <ul className=" overflow-hidden max-h-[135.5px]">
                                    {transactions.map((transaction, index) => (
                                        <li key={index} className="flex items-center justify-between py-4 border-b">
                                            <div className="icon h-[30px] w-[30px] bg-background rounded-full"></div>
                                            <div>{transaction.amount < 0 ? `You've withdrew` : `You've added `}</div>
                                            <div className="text">{transaction.amount}</div>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-4">See All</button>
                            </div>
                        </Card>


                        {/* Goals */}
                        <Card className="w-full bg-primary p-4 rounded-md mt-8">
                            <CategoryHeader categoryName="Goal: £1,000"  />

                               
                            <button className="w-full">
                                <div className="progress mt-5">
                                    <div className="flex justify-between items-center text-[.8rem] mb-1">
                                        <span>10%</span>
                                        <span>Remaining: £900</span>
                                    </div>
                                    <LinearProgress variant="determinate" value={10} />
                                </div>
                            </button>
                        </Card>
                    </div>
                    
                <button onClick={handleDrawClose} className="mt-4 bg-primary text-secondary py-4 px-6 rounded-md w-full">Close</button>
                
                <AddWithdrawMenu openAddWithdrawMenu={openAddWithdrawMenu} setOpenAddWithdrawMenu={setOpenAddWithdrawMenu} addWithdrawMenuAction={addWithdrawMenuAction} transactions={transactions} setTransactions={setTransactions} />
            </div>
        </Drawer>
    )
}



