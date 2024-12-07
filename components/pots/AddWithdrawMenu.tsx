import { usePot } from "@/lib/context/PotContext"
import { createPotTransaction } from "@/lib/mutations"
import { currencyFormat } from "@/lib/utils"
import { Close } from "@mui/icons-material"
import { Drawer, FormControlLabel, Switch } from "@mui/material"
import { useSelectedLayoutSegments } from "next/navigation"
import { use, useEffect, useState } from "react"

interface AddWithdrawMenuProps{
    openAddWithdrawMenu: boolean,
    setOpenAddWithdrawMenu: Function,
    addWithdrawMenuAction: {
        withdrawOrAdd: string
    },
    transactions: Array<any>,
    setTransactions: Function
}

// NOTE: CREATE FUNCTION IN SUPABASE THAT PREVENTS USERS FROM ADDING MORE MONET THAN THEY HAVE IN THEIR ACCOUNT

export default function AddWithdrawMenu({openAddWithdrawMenu, setOpenAddWithdrawMenu, addWithdrawMenuAction, transactions, setTransactions} : AddWithdrawMenuProps){

    console.log('NOTE: CREATE FUNCTION IN SUPABASE THAT PREVENTS USERS FROM ADDING MORE MONET THAN THEY HAVE IN THEIR ACCOUNT');
    

    const potItem = usePot()

    const {withdrawOrAdd} = addWithdrawMenuAction

    const [formData, setFormData] = useState({
        name: potItem?.name,
        potId: potItem?.id,
        amount: '',
        repeat: false,
        withdrawOrAdd
    })

    const [error, setError] = useState(null)

    const [disableButton, setDisableButton] = useState(false)

    useEffect(() => {
        if(formData.amount === ''){
            setDisableButton(true)
        }else if(Number(formData.amount) > Number(potItem?.current_amount) && withdrawOrAdd === 'withdraw'){
            setDisableButton(true)
        } else{
            setDisableButton(false)
        }
    }, [formData])

    useEffect(() => {
        setFormData({
            ...formData,
            amount: ''
        })
    },[withdrawOrAdd]) 

    const formatTransation = (amount: string) => {
        let amountReturned;
        if (withdrawOrAdd === 'withdraw') {
            amountReturned = -Math.abs(Number(amount))
            return amountReturned;
        } else {
            return amount;
        }

    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            // [name]: name === 'amount' ? currencyFormat(value) : value,
            [name]: name === 'amount' ? formatTransation(currencyFormat(value)) : value,
        })
        formatTransation(value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createPotTransaction(formData)
        if(result.error){
            setError(result.error)
            // console.log(result.error);
        }

        //clear states
        setFormData({
            ...formData,
            amount: ''
        })
        // console.log('Result:', result);

        const {results} = result
        
        const newTransationsList = [...transactions, results?.data[0]].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        // console.log(newTransationsList)
        setTransactions(newTransationsList)

        setOpenAddWithdrawMenu(false)
        
    }

   

    return(
        <>
            <Drawer open={openAddWithdrawMenu} anchor="bottom" sx={{'& .MuiDrawer-paper': {background: '#161618', borderRadius: '21px 21px 0 0'}}}>
                <div className="bg-primary h-[50vh] text-secondary rounded-tl-md">
                    <div className="mobile-container">
                        <div className="py-2 flex">
                            <button onClick={() => setOpenAddWithdrawMenu(false)} className="ml-auto"><Close sx={{color: 'white'}} /></button>
                        </div>
                        <h1 className="text-center">{withdrawOrAdd.charAt(0).toUpperCase() + withdrawOrAdd.slice(1)}</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="text-secondary p-4 border-white border-2 flex items-center gap-2 mt-4 rounded-md">
                                <div>£</div> 
                                <input onChange={handleChange} value={formData.amount} name='amount' type="number" placeholder="0.00" className="bg-transparent w-full focus:outline-none"/>
                                {}
                            </div>
                            
                            <div className="flex items-center gap-2 mt-4">
                                <FormControlLabel 
                                    control={<Switch name="repeat" />}
                                    label="Repeat?"
                                    labelPlacement="start"
                                />
                            </div>

                            <button type="submit" 
                            className={`w-full text-primary py-4 rounded-md mt-4 ${formData.amount === '' ? 'bg-[grey]' : 'bg-secondary'}`}
                            disabled={disableButton}
                            >   
                                {withdrawOrAdd.charAt(0).toUpperCase() + withdrawOrAdd.slice(1)}
                            </button>
                        </form>
                    </div>
                </div>
            </Drawer>
        </>
    )
}